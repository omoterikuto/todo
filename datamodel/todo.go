package datamodel

import "gorm.io/gorm"

type Todo struct {
	gorm.Model
	UserID uint32
	Title  string
	Done   bool
}
