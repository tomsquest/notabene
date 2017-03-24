package notes

import (
	"github.com/stretchr/testify/assert"
	"strings"
	"testing"
)

func TestRead_givenValidNote(t *testing.T) {
	reader := strings.NewReader(`Title
Text`)

	note, err := Read(reader)

	if assert.NoError(t, err) {
		assert.Equal(t, "ID", note.ID)
		assert.Equal(t, "Title", note.Title)
		assert.Equal(t, "Text", note.Text)
	}
}
