import PageLayout from "@/container/layout/PageLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <PageLayout>{children}</PageLayout>
    </div>
  );
}
