import React from "react";
import Sidebar from "../../components/dashboardComponents/Sidebar";
import Navbar from "../../components/dashboardComponents/Navbar";

function DashboardLayout({ children }) {
  return (
    <div className="flex w-screen h-screen overflow-hidden pb-6">
      <Sidebar />
      <div>
        <Navbar />

          <div className="flex flex-col gap-8 w-full h-screen py-8 px-8">
              <div className="flex  justify-between">
                  <div className="w-[740px] h-[400px] bg-[#006E90] py- px-[35px] rounded-lg">
                    {children}
                  </div>
                  <div className="w-[277px] h-[400px] bg-[#D9D9D9] opacity-50 blur-xs shadow-inner shadow-lg  rounded-lg animate-pulse"></div>
              </div>
              <div className=" flex justify-between">
                    <div className="w-[273px] h-[200px] bg-[#D9D9D9] rounded-lg animate-pulse"></div>
                    <div className="w-[273px] h-[200px] bg-[#D9D9D9] rounded-lg animate-pulse"></div>
                    <div className="w-[428px] h-[200px] bg-[#D9D9D9] rounded-lg animate-pulse"></div>
              </div>
          </div>


        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
