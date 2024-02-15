import type { Metadata } from "next";
import "./globals.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import MainLayout from "@/container/layout/MainLayout";

export const metadata: Metadata = {
  title: "My Expense Tracker",
  description: "A transaction Record app where you can keep income and expense list",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
