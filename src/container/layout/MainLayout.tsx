import React, { ReactNode } from "react";

function MainLayout({ children }: { children: ReactNode }) {
  return <div className="max-w-[1024px] m-auto">{children}</div>;
}

export default MainLayout;
