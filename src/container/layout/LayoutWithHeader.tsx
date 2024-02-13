import React, { ReactNode } from "react";
import Header from "./Header";

function LayoutWithHeader({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="max-w-[1024px] mx-auto">
      <Header title={title} />
      <div className="mt-20">{children}</div>
    </div>
  );
}

export default LayoutWithHeader;
