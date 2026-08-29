import type { Metadata } from "next";
import "./globals.css";
import Local from "next/font/local";
import {Root} from "@/components/index";

const SN = Local({
  src: "../assets/fonts/sn.ttf",
  variable: "--font-sn",
});

export const metadata: Metadata = {
  title: "Nippy Travels",
  description: "Your express travel management agency",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${SN.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Root>
          {children}
        </Root>
      </body>
    </html>
  );
}
