package notes

import (
	"github.com/pressly/chi"
	"github.com/pressly/chi/render"
	"net/http"
	"github.com/spf13/afero"
)

type API struct{}

func (api API) Routes() chi.Router {
	r := chi.NewRouter()
	r.Get("/", api.List)
	return r
}

func (api API) List(w http.ResponseWriter, r *http.Request) {
	fs := afero.NewOsFs()
	store, err := NewStore(fs, "notes")
	if err != nil {
		http.Error(w, err.Error(), 500)
	}
	notes := store.List()
	render.JSON(w, r, notes)
}
