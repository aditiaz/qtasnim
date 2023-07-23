import { useContext } from "react";
import "../App.css";
import TableComponent from "../pages/TableComponent";
import { DeleteModal } from "./Modals/DeleteModal";
import { FormModal } from "./Modals/FormModal";
import { TableContext } from "../context/TableContext";

function App() {
  const {
    modal,
    dataTable,
    id,
    handleSubmit,
    formEdit,
    handleChangeEdit,
    toggleFormModal,
    formAdd,
    setFormAdd,
    handleChangeAdd,
    handleSubmitAdd,
    toggleFormModalAdd,
  } = useContext(TableContext);
  // console.log(id);
  return (
    <div className="flex bg-red-400 w-screen justify-center items-center p-4 h-screen">
      <TableComponent data={dataTable} />
      <DeleteModal />
      <FormModal
        modal={modal.edit}
        judul={"Edit Data"}
        handleSubmit={(e) => handleSubmit.mutate(e)}
        formEdit={formEdit}
        handleChangeEdit={handleChangeEdit}
        toggleFormModal={toggleFormModal}
      />
      <FormModal
        modal={modal.add}
        judul={"Add Data"}
        handleSubmit={(e) => handleSubmitAdd.mutate(e)}
        formEdit={formAdd}
        handleChangeEdit={handleChangeAdd}
        toggleFormModal={toggleFormModalAdd}
      />
    </div>
  );
}

export default App;
