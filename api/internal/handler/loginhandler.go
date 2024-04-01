package handler

import (
	"api/internal/model"
	"api/internal/pkg"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt"
)

type CustomClaims struct {
	jwt.StandardClaims
	UserID uint   `json:"user_id"`
	Email  string `json:"email"`
}

func (handler *Handler) LoginHandler(c *gin.Context) {
	var credentials model.User
	if err := c.ShouldBindJSON(&credentials); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Bad request"})
		return
	}

	var user model.User
	result := pkg.DB.Where("email = ?", credentials.Email).First(&user)
	if result.Error != nil || user.ComparePassword(credentials.Password) != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid login credentials"})
		return
	}

	expirationTime := time.Now().Add(1 * time.Hour)
	claims := &CustomClaims{
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: expirationTime.Unix(),
			Subject:   user.Email,
		},
		UserID: user.ID,
		Email:  user.Email,
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString([]byte(handler.Config.JWTKey))

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to generate token"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"token": tokenString, "expiresAt": expirationTime, "user_id": user.ID, "email": user.Email})
}
