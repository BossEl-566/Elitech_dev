import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";


export const metadata: Metadata = {
  title: "Elitech",
  description: "Best Software Development Company in Ghana - Elitech is a leading software development company in Ghana, offering top-notch services to clients worldwide. With a team of skilled developers and a commitment to excellence, we deliver innovative solutions that drive business success. Contact us today to discuss your project and experience the Elitech difference.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
