import { Montserrat, Playfair_Display } from 'next/font/google';
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import Analytics from "./components/Analytics";
;

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata = {
  title: "creat",
  description:
    "Looking for a relaxing Spa in Delhi? Experience the best full body, sandwich massage, Couple massages at the top massage parlour in Delhi. Book Your Session Now.",
  icons: {
    icon: "/images/luxuryspaicon.png", // 👈 yahan path diya favicon ka
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${playfair.variable}`}>
         <Analytics />
        {/* <TopBar /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
