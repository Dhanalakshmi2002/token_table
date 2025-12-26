import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Axiom Pulse",
  description: "Token discovery table"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0b0f1a] text-white antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
