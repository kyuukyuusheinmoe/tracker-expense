"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import MainLayout from "@/container/layout/MainLayout";
import BottomNavBar from "@/container/layout/BottomNavBar";
import Header from "./Header";

const actionPages = ["create", "update"];

const PageLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  return (
    <div>
      {actionPages.find((p) => pathname.includes(p)) ? (
        <div className="max-w-[1024px] mx-auto">
          <Header />
          <div className="mt-20">{children}</div>
        </div>
      ) : (
        <MainLayout>
          {children}
          <BottomNavBar />
        </MainLayout>
      )}
    </div>
  );
};

export default PageLayout;
