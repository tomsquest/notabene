package notes

import (
	"fmt"
	"github.com/pressly/chi"
	"github.com/pressly/chi/render"
	"net/http"
)

type API struct{}

func (api API) Routes() chi.Router {
	r := chi.NewRouter()
	r.Get("/", api.List)
	return r
}

func (api API) List(w http.ResponseWriter, r *http.Request) {
	notes := make([]Note, 10)
	for i := range notes {
		notes[i] = Note{
			ID:    fmt.Sprint(i),
			Title: fmt.Sprint("Title", i),
			Text:  fmt.Sprint("Text", i),
		}
	}

	render.JSON(w, r, notes)
}
