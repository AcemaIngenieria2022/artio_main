import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "Siwa Suministros",
  description: "Sitio en construcción - Holding",
  icons: {
    icon: "/favicon.ico", 
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body style={{ backgroundColor: '#ffffff', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}