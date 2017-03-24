package notes

import (
	"io"
	"io/ioutil"
	"strings"
)

func Read(reader io.Reader) (*Note, error) {
	b, err := ioutil.ReadAll(reader)
	if err != nil {
		return nil, err
	}
	lines := string(b)

	if endOfTitle := strings.IndexByte(lines, '\n'); endOfTitle >= 0 {
		title := lines[:endOfTitle]
		text := lines[endOfTitle+1:]
		return &Note{
			"ID", title, text,
		}, nil
	}

	return &Note{}, nil
}
