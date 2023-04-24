import React from "react";
import search from "../../assets/dash/search.svg";
import notification from "../../assets/dash/bell.svg";

function Navbar() {
  return (
    <div className="flex justify-around items-center h-[80px] w-[1167px] shadow-lg">
      <h1 className="text-2xl font-bold text-[#006E90]">Welcome Ikenna</h1>
      <div className="relative">
        <input type="text" placeholder="search" class="w-[300px] py-2 px-2 border border-1 border-[#006E90] rounded-lg focus:outline-[#006E70] focus:border-[#006E20] focus:ring-2" />
      <img src={search} alt="" className="absolute top-2 cursor-pointer right-2 " />
      </div>

      <div className="flex items-center justify-betwen w-[120px] gap-2">
        <img src={notification} alt="" className="" />
        <p className="font-bold">ikenna</p>
      </div>
    </div>
  );
}

export default Navbar;
