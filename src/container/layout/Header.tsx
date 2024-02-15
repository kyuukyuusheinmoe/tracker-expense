import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter, usePathname } from "next/navigation";
import { convertUrlToTitle } from "@/utils/common";

function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const title =  convertUrlToTitle(pathname);

  return (
    <div className="flex gap-4 bg-white shadow-sm p-4 fixed top-0 w-full">
      <ArrowLeftIcon className="w-7 h-7" onClick={() => router.push("/")} />
      <p className="text-lg"> {title}</p>
    </div>
  );
}

export default Header;
