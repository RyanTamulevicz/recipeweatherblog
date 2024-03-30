package config

import (
	"os"
	"strconv"

	"github.com/joho/godotenv"
	"github.com/labstack/gommon/log"
)

type Config struct {
	Server   ServerConfig
	Database DatabaseConfig
	JWTKey   string
}

type ServerConfig struct {
	Port string
}

type DatabaseConfig struct {
	Host     string
	Port     int
	Username string
	Password string
	Name     string
}

func LoadConfig() (*Config, error) {
	err := godotenv.Load("../../../.env.local")
	if err != nil {
		log.Fatalf("Error loading .env.local file")
	}

	dbPort, err := strconv.Atoi(os.Getenv("DB_PORT"))
	if err != nil {
		dbPort = 5432
	}

	return &Config{
		Server: ServerConfig{
			Port: os.Getenv("API_SERVER_PORT"),
		},
		Database: DatabaseConfig{
			Host:     os.Getenv("DB_HOST"),
			Port:     dbPort,
			Username: os.Getenv("DB_USER"),
			Password: os.Getenv("DB_PASS"),
			Name:     os.Getenv("DB_NAME"),
		},
		JWTKey: os.Getenv("JWT_KEY"),
	}, nil
}
