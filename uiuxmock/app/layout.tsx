import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { TooltipProvider } from "@radix-ui/react-tooltip";

const appFont = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UIUX Mockup generator App",
  description: "Generate High quality free UIUX Mobile and Web Mockup desings",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={appFont.className}>
        <ClerkProvider>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
