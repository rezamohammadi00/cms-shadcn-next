import type { Metadata } from "next";

import "@/styles/globals.css";
import IranSansXPro from "@/styles/fonts";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "داشبورد",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" suppressHydrationWarning>
      <body
        className={`${IranSansXPro.className} ${IranSansXPro.variable} antialiased font-normal`}
        dir="rtl"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
