package model

import (
	"errors"
	"regexp"

	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Email    string `gorm:"unique;not null"`
	Password string `gorm:"not null"`
}

func (u *User) BeforeSave(tx *gorm.DB) (err error) {
	if err = validateEmail(u.Email); err != nil {
		return tx.AddError(err)
	}

	if len(u.Password) < 6 {
		return tx.AddError(errors.New("password must be at least 6 characters"))
	}

	if u.Password, err = hashPassword(u.Password); err != nil {
		return tx.AddError(err)
	}

	return
}

func validateEmail(email string) error {
	var emailRegex = regexp.MustCompile(`^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$`)

	if len(email) < 3 || !emailRegex.MatchString(email) {
		return errors.New("invalid email")
	}

	return nil
}

func hashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return "", err
	}

	return string(bytes), nil
}

func (u *User) ComparePassword(password string) error {
	return bcrypt.CompareHashAndPassword([]byte(u.Password),
		[]byte(password))
}

type Recipe struct {
	gorm.Model
	Title           string
	Slug            string
	Description     string
	ImageUrl        string
	Time_to_cook    int
	Good_in_weather string
	Difficulty      string
	Methods         string
	Ingredients     string
	Blog            string
}
