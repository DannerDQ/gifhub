import { props } from "@/types";
import "./globals.css";

export default function RootLayout({ children }: props) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
