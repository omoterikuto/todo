package datamodel

import "gorm.io/gorm"

type User struct {
	gorm.Model
	name string
}
