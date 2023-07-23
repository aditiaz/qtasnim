package barangdto

type BarangRequest struct {
	ID      int    `json:"id"`
	Barang  string `json:"barang"`
	Stok    string `json:"stok"`
	Jumlah  string `json:"jumlah"`
	Tanggal string `json:"tanggal"`
	Jenis   string `json:"jenis"`
}
