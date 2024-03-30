package pkg

import (
	"api/internal/config"
	"api/internal/model"
	"log"
	"strconv"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDB(cfg *config.Config) error {
	dsn := cfg.Database.Username + ":" + cfg.Database.Password + "@tcp(" + cfg.Database.Host + ":" + strconv.Itoa(cfg.Database.Port) + ")/" + cfg.Database.Name + "?charset=utf8mb4&parseTime=True&loc=Local"
	var err error
	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Could not connect to database: %v", err)
		return err
	}

	models := []interface{}{
		&model.User{},
		&model.Recipe{},
	}

	err = DB.AutoMigrate(models...)
	if err != nil {
		log.Fatalf("Could not migrate database: %v", err)
		return err
	}

	return nil
}
