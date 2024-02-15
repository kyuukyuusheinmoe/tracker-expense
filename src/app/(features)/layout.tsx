import PageLayout from "@/container/layout/PageLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
