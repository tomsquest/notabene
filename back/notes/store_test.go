package notes

import (
	"github.com/spf13/afero"
	"testing"
	"github.com/stretchr/testify/require"
)

func TestList_oneNote(t *testing.T) {
	fs := afero.NewMemMapFs()
	fs.MkdirAll("notes/note-1", 0755)

	note1Path := "notes/note-1/note.md"
	afero.WriteFile(fs, note1Path, []byte(`content`), 0644)

	store, err := NewStore(fs, "notes")
	require.NoError(t, err)

	notes := store.List()

	require.Len(t, notes, 1)
	require.Equal(t, "note-1", notes[0].ID)

	//expectedNotes := []Note{
	//	{ID: "first", Title: "First title", Text: "First text"},
	//}
	//assert.Equal(t, expectedNotes, notes)
}
