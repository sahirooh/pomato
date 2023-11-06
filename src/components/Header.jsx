import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col justify-center h-[150px]">
      <div className="flex m-auto justify-between max-w-[1200px] h-10 w-[90%]">
        <h1 className="font-bold text-3xl text-white">
          F<span className="text-red-500">oo</span>dy Z
          <span className="text-red-500">o</span>ne
        </h1>

        <input
          className="font-normal text-white bg-[#5A5959] w-[285px] placeholder-white border-[2px] outline-none placeholder:text-base border-red-600 rounded-md p-2"
          type="text"
          placeholder="Search Food...."
        />
      </div>

      <div className="flex justify-center gap-4 mb-7 h-[31px]">
        <button className="bg-[#FF4343] text-white rounded px-3 py-1">
          All
        </button>
        <button className="bg-[#FF4343] text-white rounded px-3 py-1">
          Breakfast
        </button>
        <button className="bg-[#FF4343] text-white rounded px-3 py-1">
          Lunch
        </button>
        <button className="bg-[#FF4343] text-white rounded px-3 py-1">
          Dinner
        </button>
      </div>
    </div>
  );
};

export default Header;
