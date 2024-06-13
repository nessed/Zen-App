import { Inter, Roboto, Lato } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400"] });
const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "400"] });

export const metadata = {
  title:"Zen",
  description: "developed by ali",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className.thin}>{children}</body>
    </html>
  );
}
