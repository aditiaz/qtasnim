import { useEffect, useState, createContext } from "react";
import { tableAPI } from "../utils/API";
import { useMutation } from "react-query";

export const TableContext = createContext(null);
export const TableContextProvider = (props) => {
  const [modal, setModal] = useState({
    delete: true,
    edit: true,
    add: true,
  });
  const [id, setId] = useState();
  const [dataTable, setDataTable] = useState([]);
  // fetch all data
  const fetchData = async () => {
    try {
      const response = await tableAPI.get("barangs");
      setDataTable(Object.values(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };
  // delete
  const toggleDeleteModal = () => {
    setModal((prevModal) => ({
      ...prevModal,
      delete: !prevModal.delete,
    }));
  };

  const deleteData = async (id) => {
    try {
      const response = await tableAPI.delete(`deletebarang/${id}`);
      const updatedResponse = await tableAPI.get("barangs");
      setDataTable(Object.values(updatedResponse.data.data));
      toggleDeleteModal();
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // form edit
  const toggleFormModal = () => {
    setModal((prevModal) => ({
      ...prevModal,
      edit: !prevModal.edit,
    }));
  };
  const [formEdit, setFormEdit] = useState({
    barang: "",
    stok: "",
    jumlah: "",
    tanggal: "",
    jenis: "",
  });

  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setFormEdit({
      ...formEdit,
      [name]: value,
    });
  };

  const handleSubmit = useMutation(async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      formData.append("barang", formEdit.barang);
      formData.append("stok", formEdit.stok);
      formData.append("jumlah", formEdit.jumlah);
      formData.append("tanggal", formEdit.tanggal);
      formData.append("jenis", formEdit.jenis);

      const response = await tableAPI.put(`editbarang/${id}`, formData);
      const responsee = await tableAPI.get("barangs");

      console.log(response.data.code);
    } catch (error) {
      console.log(error);
    }
  });
  // form add

  const [formAdd, setFormAdd] = useState({
    barang: "",
    stok: "",
    jumlah: "",
    tanggal: "",
    jenis: "",
  });
  const toggleFormModalAdd = () => {
    setModal((prevModal) => ({
      ...prevModal,
      add: !prevModal.add,
    }));
  };
  const handleChangeAdd = (e) => {
    const { name, value } = e.target;
    setFormAdd({
      ...formAdd,
      [name]: value,
    });
  };

  const handleSubmitAdd = useMutation(async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      formData.append("barang", formAdd.barang);
      formData.append("stok", formAdd.stok);
      formData.append("jumlah", formAdd.jumlah);
      formData.append("tanggal", formAdd.tanggal);
      formData.append("jenis", formAdd.jenis);

      const response = await tableAPI.post(`addbarang`, formData);

      console.log(response.data.code);
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TableContext.Provider
      value={{
        modal,
        setModal,
        dataTable,
        setDataTable,
        toggleDeleteModal,
        deleteData,
        id,
        setId,
        toggleFormModal,
        fetchData,
        handleSubmit,
        formEdit,
        handleChangeEdit,
        formAdd,
        setFormAdd,
        handleChangeAdd,
        handleSubmitAdd,
        toggleFormModalAdd,
      }}
    >
      {props.children}
    </TableContext.Provider>
  );
};
