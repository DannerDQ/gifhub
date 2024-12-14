import SearchBar from "@/components/SearchBar";
import GlobalContextProvider from "@/contexts/global/provider";
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
        <main>
          <GlobalContextProvider>{children}</GlobalContextProvider>
        </main>
      </body>
    </html>
  );
}
