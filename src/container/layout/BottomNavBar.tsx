import React from "react";

function BottomNavBar() {
  return (
    <div className="fixed w-full max-w-[1024px] mx-auto bottom-0 z-50 ">
      <div className=" flex justify-center -mb-8">
        <div className="bg-main w-14 aspect-square rounded-full text-center">
          <i className="pi pi-plus text-white mt-3 !text-2xl" />
        </div>
      </div>
      <div className="border shadow-md flex justify-between p-6 bg-white">
        <i className="pi pi-home !text-2xl" />
        <i className="pi pi-wallet !text-2xl" />
      </div>
    </div>
  );
}

export default BottomNavBar;
