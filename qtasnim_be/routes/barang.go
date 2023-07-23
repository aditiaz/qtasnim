package routes

import (
	"qtasnim/handlers"
	"qtasnim/mysql"
	"qtasnim/repositories"

	"github.com/gorilla/mux"
)

func BarangRoutes(r *mux.Router) {
	barangRepository := repositories.RepositoryBarang(mysql.DB)
	h := handlers.HandlerBarang(barangRepository)
	r.HandleFunc("/barangs", h.AllBarang).Methods("GET")
	r.HandleFunc("/addbarang", h.AddBarang).Methods("POST")
	r.HandleFunc("/deletebarang/{id}", h.DeleteBarang).Methods("DELETE")
	r.HandleFunc("/editbarang/{id}", h.EditBarang).Methods("PUT")
}
