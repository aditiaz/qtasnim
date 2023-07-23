import React, { useContext } from "react";
import deleteIc from "../assets/icon_delete.svg";
import editIc from "../assets/icon_edit.svg";
import { TableContext } from "../context/TableContext";

const TableComponent = ({ data }) => {
  const { toggleDeleteModal, toggleFormModal, setId, toggleFormModalAdd } =
    useContext(TableContext);
  return (
    <div className="w-[75rem] h-fit shadow-md rounded my-6">
      <div className="bg-transparent flex justify-center">
        <button
          onClick={toggleFormModalAdd}
          className="bg-gray-400 p-2 rounded-lg w-[7rem] my-[.2rem]"
        >
          Add Data
        </button>
      </div>
      <table className="w-full table-auto bg-white ">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">No</th>
            <th className="py-3 px-6 text-left">Nama Barang</th>
            <th className="py-3 px-6 text-left">Stok</th>
            <th className="py-3 px-6 text-left">Jumlah Terjual</th>
            <th className="py-3 px-6 text-left">Tanggal Transaksi</th>
            <th className="py-3 px-6 text-left">Jenis</th>
            <th className="py-3 px-6 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data?.map((item, index) => (
            <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">{item.barang}</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">{item.stok}</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">{item.jumlah}</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">{item.tanggal}</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">{item.jenis}</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">
                <div className="flex ">
                  <button
                    onClick={() => {
                      toggleFormModal();
                      setId(item.id);
                    }}
                    className="w-[2rem]"
                  >
                    <img src={editIc} alt="" />
                  </button>
                  <p className="text-[2rem] font-thin">|</p>
                  <button
                    onClick={() => {
                      toggleDeleteModal();
                      setId(item.id);
                    }}
                    className="w-[2rem]"
                  >
                    <img src={deleteIc} alt="" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
