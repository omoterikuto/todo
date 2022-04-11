package model

type Todo struct {
	ID     uint32 `json:"id"`
	Text   string `json:"text"`
	Done   bool   `json:"done"`
	UserID uint32 `json:"user"`
}
