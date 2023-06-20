import React, { useState } from 'react'
import { AiOutlineSearch ,AiOutlineClose} from 'react-icons/ai';

export default function () {
  const [Searchinput, setSearchinput] = useState(null);

  const handelSearchinput = (e) => {
    setSearchinput(e.target.value)
  };
  return (
    <div className="border border-y border-gray-200" style={{ height: "80%" }}>
      <div className="flex flex-col  px-4">
        <div className=" border border-gray-200 flex items-center w-full  rounded-lg p-2 my-3">
          <AiOutlineSearch className="text-lg font-bold " />
          <input
            type="text"
            className=" border-white w-full border focus:border focus:ring-0 focus:outline-none mx-2"
            value={Searchinput}
            onChange={handelSearchinput}
          />
          <button onClick={() => setSearchinput("")}>
            <AiOutlineClose className="bg-gray-400 text-white rounded-lg text-lg p-1 " />
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
}
