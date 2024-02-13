import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

function Header({ title }: { title: string }) {
  const router = useRouter();
  return (
    <div className="flex gap-4 bg-white shadow-sm p-4 fixed top-0 w-full">
      <ArrowLeftIcon className="w-7 h-7" onClick={() => router.push("/")} />
      <p className="text-lg"> {title}</p>
    </div>
  );
}

export default Header;
