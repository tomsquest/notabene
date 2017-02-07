package notes

import "fmt"

type store struct {
	path string
}

func NewStore(path string) *store {
	return &store{path}
}

func (store *store) List() []Note {
	notes := make([]Note, 10)
	for i := range notes {
		notes[i] = Note{
			ID:    fmt.Sprint(i),
			Title: fmt.Sprint("Title", i),
			Text:  fmt.Sprint("Text", i),
		}
	}
	return notes
}
