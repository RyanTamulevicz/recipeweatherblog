package main

import (
	"api/internal/config"
	"api/internal/handler"
	"api/internal/pkg"
	"api/routes"
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	cfg, err := config.LoadConfig()
	if err != nil {
		log.Fatalf("Could not load configuration: %v", err)
	}

	pkg.ConnectDB(cfg)
	h := handler.NewHandler(cfg, pkg.DB)

	router := gin.Default()

	routes.Setup(router, h, cfg)

	port := cfg.Server.Port
	fmt.Println(cfg)
	if port == "" {
		log.Fatal("Port is not set in config")
	}
	log.Printf("Listening on port %s", port)
	if err := http.ListenAndServe(":"+port, router); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
