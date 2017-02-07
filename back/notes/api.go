package notes

import (
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
	store := NewStore("notes")
	notes := store.List()
	render.JSON(w, r, notes)
}
