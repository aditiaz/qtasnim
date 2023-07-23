package repositories

import (
	"qtasnim/models"

	"gorm.io/gorm"
)

type BarangRepository interface {
	AllBarang() ([]models.Barang, error)
	AddBarang(barang models.Barang) (models.Barang, error)
	EditBarang(ID int, barang models.Barang) (models.Barang, error)
	DeleteBarang(ID int) (models.Barang, error)
}

func RepositoryBarang(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) AllBarang() ([]models.Barang, error) {
	var barangs []models.Barang
	err := r.db.Find(&barangs).Error
	return barangs, err
}

func (r *repository) AddBarang(barang models.Barang) (models.Barang, error) {
	err := r.db.Create(&barang).Error
	return barang, err
}

func (r *repository) DeleteBarang(ID int) (models.Barang, error) {
	var barang models.Barang
	err := r.db.Delete(&barang, ID).Error

	return barang, err
}

func (r *repository) EditBarang(ID int, updatedBarang models.Barang) (models.Barang, error) {
	var barang models.Barang
	err := r.db.First(&barang, ID).Error
	if err != nil {
		return barang, err
	}

	barang.Barang = updatedBarang.Barang
	barang.Stok = updatedBarang.Stok
	barang.Jenis = updatedBarang.Jenis
	barang.Jumlah = updatedBarang.Jumlah
	barang.Tanggal = updatedBarang.Tanggal

	err = r.db.Save(&barang).Error
	return barang, err
}
