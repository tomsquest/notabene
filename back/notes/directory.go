package notes

import (
	"fmt"
	"github.com/spf13/afero"
)

type Dir interface {
	Name() string
	ListDirs() ([]Dir, error)
}

func OpenDir(fs afero.Fs, path string) (Dir, error) {
	info, err := fs.Stat(path)
	if err != nil {
		return nil, err
	}

	if !info.IsDir() {
		return nil, fmt.Errorf("Not a directory: %s", path)
	}

	return directory{
		fs: fs,
		name: info.Name(),
	}, nil
}

type directory struct {
	fs afero.Fs
	name string
}

func (d directory) Name() string {
	return d.name
}

func (d directory) ListDirs() ([]Dir, error) {
	infos, err := afero.ReadDir(d.fs, d.name)
	if err != nil {
		return nil, err
	}

	subDirs := []Dir{}
	for _, info := range infos {
		if info.IsDir() {
			subDirs = append(subDirs, directory{
				fs: d.fs,
				name: info.Name(),
			})
		}
	}

	return subDirs, nil
}