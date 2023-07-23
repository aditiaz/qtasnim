package handlers

import (
	"encoding/json"
	"net/http"
	barangdto "qtasnim/dto/barang"
	dto "qtasnim/dto/result"
	"qtasnim/models"
	"qtasnim/repositories"

	"strconv"

	"github.com/go-playground/validator/v10"
	"github.com/gorilla/mux"
)

type handlerBarang struct {
	BarangRepository repositories.BarangRepository
}

func HandlerBarang(BarangRepository repositories.BarangRepository) *handlerBarang {
	return &handlerBarang{BarangRepository}
}

func (h *handlerBarang) AllBarang(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	barangs, err := h.BarangRepository.AllBarang()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(err.Error())
	}
	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: barangs}
	json.NewEncoder(w).Encode(response)
}

func (h *handlerBarang) AddBarang(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	request := barangdto.BarangRequest{
		Barang:  r.FormValue("barang"),
		Stok:    r.FormValue("stok"),
		Jumlah:  r.FormValue("jumlah"),
		Tanggal: r.FormValue("tanggal"),
		Jenis:   r.FormValue("jenis"),
	}

	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	barang := models.Barang{
		Barang:  request.Barang,
		Stok:    request.Stok,
		Jumlah:  request.Jumlah,
		Tanggal: request.Tanggal,
		Jenis:   request.Jenis,
	}

	data, err := h.BarangRepository.AddBarang(barang)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}
	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: data}
	json.NewEncoder(w).Encode(response)
}

func (h *handlerBarang) DeleteBarang(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	id, _ := strconv.Atoi(mux.Vars(r)["id"])
	barang, err := h.BarangRepository.DeleteBarang(id)

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		responsse := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(responsse)
		return
	}
	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: barang}
	json.NewEncoder(w).Encode(response)
}

func (h *handlerBarang) EditBarang(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	id, _ := strconv.Atoi(mux.Vars(r)["id"])

	request := barangdto.BarangRequest{
		Barang:  r.FormValue("barang"),
		Stok:    r.FormValue("stok"),
		Jumlah:  r.FormValue("jumlah"),
		Tanggal: r.FormValue("tanggal"),
		Jenis:   r.FormValue("jenis"),
	}

	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	barang := models.Barang{
		ID:      id,
		Barang:  request.Barang,
		Stok:    request.Stok,
		Jumlah:  request.Jumlah,
		Tanggal: request.Tanggal,
		Jenis:   request.Jenis,
	}

	updatedBarang, err := h.BarangRepository.EditBarang(id, barang)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}
	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: updatedBarang}
	json.NewEncoder(w).Encode(response)
}
