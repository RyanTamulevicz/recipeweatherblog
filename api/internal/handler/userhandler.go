package handler

import (
	"api/internal/model"
	"api/internal/pkg"
	"net/http"

	"github.com/gin-gonic/gin"
)

func (handler *Handler) CreateUserHandler(c *gin.Context) {
	var input model.User
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result := pkg.DB.Create(&input)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
		return
	}
}

func (handler *Handler) AuthCheckHandler(c *gin.Context) {
	userID, _ := c.Get("userID")
	c.JSON(http.StatusOK, gin.H{"userID": userID})
}
