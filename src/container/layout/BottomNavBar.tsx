"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

function BottomNavBar() {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <div className="fixed w-full max-w-[1024px] mx-auto bottom-0 z-50">
      <div className=" flex justify-center -mb-8">
        <div className="w-14 aspect-square rounded-full text-center bg-slate-600">
          <i
            className="pi pi-plus text-white mt-3 !text-2xl "
            onClick={() =>
              router.push(
                `${pathName === "/" ? "/transactions" : "/accounts"}/create`
              )
            }
          />
        </div>
      </div>
      <div className="border shadow-md flex justify-between p-6 bg-white">
        <i className="pi pi-home !text-2xl" onClick={() => router.push("/")} />
        <i
          className="pi pi-wallet !text-2xl"
          onClick={() => router.push("/accounts")}
        />
      </div>
    </div>
  );
}

export default BottomNavBar;
