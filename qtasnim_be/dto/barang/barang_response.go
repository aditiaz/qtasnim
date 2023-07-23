package barangdto

type BarangResponse struct {
	Barang  string `json:"barang"`
	Jumlah  string `json:"jumlah"`
	Stok    string `json:"stok"`
	Tanggal string `json:"tanggal"`
	Jenis   string `json:"jenis"`
}
