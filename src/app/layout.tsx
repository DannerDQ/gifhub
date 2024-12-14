import SearchBar from "@/components/SearchBar";
import { props } from "@/types";
import "./globals.css";

export default function RootLayout({ children }: props) {
  return (
    <html lang="es">
      <body>
        <header>
          <h1>Gif Hub</h1>
          <div>
            <SearchBar />
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
