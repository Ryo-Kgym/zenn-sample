import type { Metadata } from "next";
import "./globals.css";
import { MantineProvider } from "@mantine/core";

export const metadata: Metadata = {
  title: "Intercepting Routes Sample",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <MantineProvider defaultColorScheme={"light"}>
        <body>
          <div className={"p-5"}>{children}</div>
        </body>
      </MantineProvider>
    </html>
  );
}
