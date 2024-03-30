package routes

import (
	"api/internal/config"
	"api/internal/handler"
	"api/internal/middleware"

	"github.com/gin-gonic/gin"
)

func Setup(router *gin.Engine, handler *handler.Handler, cfg *config.Config) {
	router.POST("/api/user/create", handler.CreateUserHandler)
	router.POST("/api/user/login", handler.LoginHandler)

	authorized := router.Group("/api/recipes")
	authorized.Use(middleware.AuthMiddleware(cfg))
	{
		authorized.GET("/hello", handler.HelloWorldHandler)
	}
}
