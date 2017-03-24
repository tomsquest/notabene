package notes

import (
	"fmt"
	"github.com/spf13/afero"
)

type store struct {
	baseDir Dir
}

func NewStore(fs afero.Fs, baseDirName string) (*store, error) {
	dir, err:= OpenDir(fs, baseDirName)
	if err != nil {
		return nil, err
	}
	return &store{dir}, err
}

func (store *store) List() []Note {

	//dirs := store.baseDir.ListDirectories()


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
