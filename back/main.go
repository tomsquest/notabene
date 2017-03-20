package main

import (
	"github.com/pressly/chi"
	"github.com/pressly/chi/middleware"
	"github.com/tomsquest/notabene/back/notes"
	"log"
	"net/http"
)

func main() {
	r := chi.NewRouter()

	r.Use(middleware.RequestID)
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Use(middleware.StripSlashes)
	r.Use(middleware.Heartbeat("/status"))

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello API"))
	})

	r.Mount("/notes", notes.API{}.Routes())

	log.Fatal(http.ListenAndServe(":8000", r))
}
