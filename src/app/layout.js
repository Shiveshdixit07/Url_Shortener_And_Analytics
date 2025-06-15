import { Inter } from "next/font/google";
import "./globals.css";
import connectDB from "../../config/database";

const inter = Inter({ subsets: ["latin"] });

// Initialize database connection
connectDB().catch(console.error);

export const metadata = {
  title: "Url Shortener And Analytics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
