import PageLayout from "@/container/layout/PageLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
