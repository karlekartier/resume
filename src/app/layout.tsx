import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";
import { ThemeProvider } from "@/components/theme-provider";
import { VersionProvider } from "@/components/version-provider";
import { BackToTop } from "@/components/BackToTop";
import { BASE_PATH } from "@/utils/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karthick Kishore | Portfolio",
  description: "Digital Marketer & Motion Graphics Expert",
  icons: {
    icon: `${BASE_PATH}/assets/favicon/kk_logo.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          "antialiased isolate",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <VersionProvider>
            {children}
            <BackToTop />
          </VersionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
