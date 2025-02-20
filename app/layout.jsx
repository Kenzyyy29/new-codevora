import {Ubuntu} from "next/font/google"
import "./globals.css";

// Components
import Header from "@/components/Header";
import FooterWithSocialLinks from "@/components/Footer";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700",],
  style: ["normal", "italic"],
  variable: "--font-ubuntu",
}) 

export const metadata = {
  title: "Codevora Tech",
  description: "The best digital solutions of all your business needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-hitam text-tulang">
        <Header/>
        {children}
        <FooterWithSocialLinks/>
      </body>
    </html>
  );
}
