package notes

import (
	"github.com/spf13/afero"
	"github.com/stretchr/testify/require"
	"os"
	"testing"
)

func TestOpenExistingDirectory(t *testing.T) {
	fs := afero.NewMemMapFs()
	fs.Mkdir("aDir", 0755)

	dir, _ := OpenDir(fs, "aDir")

	require.Equal(t, "aDir", dir.Name())
}

func TestOpenWithUnknownDirectory(t *testing.T) {
	fs := afero.NewMemMapFs()

	_, err := OpenDir(fs, "unknown")

	require.IsType(t, &os.PathError{}, err)
}

func TestOpenOrdinaryFile(t *testing.T) {
	fs := afero.NewMemMapFs()
	fs.Create("aFile")

	_, err := OpenDir(fs, "aFile")

	require.EqualError(t, err, "Not a directory: aFile")
}

func TestListDirectories(t *testing.T) {
	fs := afero.NewMemMapFs()
	fs.Mkdir("notes", 0755)
	fs.Mkdir("notes/note-1", 0755)
	fs.Mkdir("notes/note-2", 0755)

	rootDir, _ := OpenDir(fs, "notes")
	subDirs, _ := rootDir.ListDirs()

	require.Len(t, subDirs, 2)
	require.Equal(t, "note-1", subDirs[0].Name())
	require.Equal(t, "note-2", subDirs[1].Name())
}

func TestListEmptyDirectory(t *testing.T) {
	fs := afero.NewMemMapFs()
	fs.Mkdir("notes", 0755)

	rootDir, _ := OpenDir(fs, "notes")
	subDirs, _ := rootDir.ListDirs()

	require.Len(t, subDirs, 0)
}