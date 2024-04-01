package handler

import (
	"api/internal/config"

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
