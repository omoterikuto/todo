package config

import (
	"fmt"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"os"

	_ "github.com/lib/pq"
)

var db *gorm.DB

func InitDB() error {
	var err error
	db, err = gorm.Open(postgres.Open(dbsn()), &gorm.Config{})
	if err != nil {
		return err
	}

	return nil
}

func dbsn() string {
	return fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%s sslmode=disable",
		os.Getenv("DB_HOST"),
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_NAME"),
		os.Getenv("DB_PORT"),
	)
}

func DB() *gorm.DB {
	return db
}
