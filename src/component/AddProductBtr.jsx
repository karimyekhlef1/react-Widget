import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { GrRefresh } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { handelSearchWidget } from "../redux/AppSlice";

function AddProductBtr() {
  const dispatch = useDispatch();

  const [addProductBtr, setaddProductBtr] = useState(false);

  const handeladdProductBtr = () => {
    setaddProductBtr(!addProductBtr);
  };
  return (
    <div className=" flex flex-col justify-center items-center h-full w-full">
      {addProductBtr ? (
        <button
          className="bg-black w-12 h-12 rounded-full flex  justify-center items-center text-white"
          onClick={handeladdProductBtr}
        >
          <AiOutlineClose />
        </button>
      ) : (
        <button
          className="bg-blue-500  w-12 h-12 rounded-full flex  justify-center items-center text-white"
          onClick={handeladdProductBtr}
        >
          <AiOutlinePlus />
        </button>
      )}

      {addProductBtr ? (
        <div className="flex border-2 border-gray-400 rounded-lg w-32 h-16 justify-evenly items-center ">
          <button
            className="bg-blue-500  w-12 h-12 rounded-full flex  justify-center items-center text-white"
            onClick={() => dispatch(handelSearchWidget())}
          >
            <AiOutlineSearch />
          </button>
          <button className="bg-blue-500  w-12 h-12 rounded-full flex  justify-center items-center text-white">
            <GrRefresh />
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default AddProductBtr;
