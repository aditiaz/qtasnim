import { useContext, useEffect, useState } from "react";
import { TableContext } from "../../context/TableContext";
export const DeleteModal = () => {
  const { modal, deleteData, id, toggleDeleteModal } = useContext(TableContext);

  return (
    <div hidden={modal.delete}>
      <div className="absolute flex justify-center w-[25rem] h-[10rem]  rounded-lg top-[40%] bg-green-400 left-[40%]">
        <div className="text-white font-semibold text-2xl space-y-3 mt-[2rem]">
          <h1 className="text-center">Are you sure ?</h1>
          <div className="flex justify-between  gap-[1rem]">
            <button
              onClick={() => {
                deleteData(id);
              }}
              className="bg-pink-300 w-[5rem] py-1 rounded-md"
            >
              YES
            </button>
            <button onClick={toggleDeleteModal} className="bg-pink-300 w-[5rem] py-1 rounded-md">
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
