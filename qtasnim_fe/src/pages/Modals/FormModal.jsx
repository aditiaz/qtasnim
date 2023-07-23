export const FormModal = ({
  modal,
  judul,
  handleSubmit,
  formEdit,
  handleChangeEdit,
  toggleFormModal,
}) => {
  return (
    <div hidden={modal}>
      <div className="absolute flex justify-center w-[25rem] h-[30rem] rounded-lg top-[25%] bg-blue-400 left-[40%]">
        <form
          onSubmit={handleSubmit}
          className=" text-white font-semibold space-y-3 mt-[2rem] px-4"
        >
          <h1 className="text-center text-2xl">{judul}</h1>
          <div>
            <label htmlFor="barang">Barang:</label>
            <input
              name="barang"
              type="text"
              id="barang"
              value={formEdit.barang}
              onChange={handleChangeEdit}
              className="w-full text-black   bg-gray-100 rounded-md py-1 px-2"
            />
          </div>
          <div>
            <label htmlFor="stok">Stok:</label>
            <input
              name="stok"
              type="text"
              id="stok"
              value={formEdit.stok}
              onChange={handleChangeEdit}
              className="w-full text-black bg-gray-100 rounded-md py-1 px-2"
            />
          </div>
          <div>
            <label htmlFor="jumlah">Jumlah Terjual:</label>
            <input
              name="jumlah"
              type="text"
              id="jumlah"
              value={formEdit.jumlah}
              onChange={handleChangeEdit}
              className="w-full text-black bg-gray-100 rounded-md py-1 px-2"
            />
          </div>
          <div>
            <label htmlFor="tanggal">Tanggal Transaksi:</label>
            <input
              name="tanggal"
              type="date"
              id="tanggal"
              value={formEdit.tanggal}
              onChange={handleChangeEdit}
              className="w-full text-black bg-gray-100 rounded-md py-1 px-2"
            />
          </div>
          <div>
            <label htmlFor="jenis">Jenis:</label>
            <select
              name="jenis"
              id="jenis"
              value={formEdit.jenis}
              onChange={handleChangeEdit}
              className="w-full text-black bg-gray-100 rounded-md py-1 px-2"
            >
              <option></option>
              <option value="Pembersih">Pembersih</option>
              <option value="Konsumsi">Konsumsi</option>
            </select>
          </div>
          <div className="flex justify-between gap-[1rem]">
            <button
              onClick={toggleFormModal}
              type="submit"
              className="bg-green-300 w-[5rem] py-1 rounded-md"
            >
              Save
            </button>
            <button onClick={toggleFormModal} className="bg-pink-300 w-[5rem] py-1 rounded-md">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
