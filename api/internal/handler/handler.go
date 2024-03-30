package handler

import (
	"api/internal/config"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type Handler struct {
	Config *config.Config
	DB     *gorm.DB
}

func NewHandler(cfg *config.Config, db *gorm.DB) *Handler {
	return &Handler{
		Config: cfg,
		DB:     db,
	}
}
func (handler *Handler) HelloWorldHandler(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "Hello, world from Gin!"})
}
