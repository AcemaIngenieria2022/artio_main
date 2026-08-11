import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "Artio - Ebanistería",
  description: "Sitio en construcción - Artio Ebanistería",
  icons: {
    icon: "/favicon.ico", 
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body style={{ backgroundColor: '#fcfbf9', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}