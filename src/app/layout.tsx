import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cocktail Recipe App",
  description: "Discover cocktail recipes for professionals and enthusiasts",
  keywords: ["cocktails", "recipes", "bartender", "mixology", "drinks"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gray-50`}
      >
        <header className="bg-white shadow-sm py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">
              Cocktail Recipes
            </Link>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" className="text-gray-700 hover:text-blue-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/search"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    Search
                  </Link>
                </li>
                <li>
                  <Link
                    href="/random"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    Random
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Cocktail Recipes</h3>
                <p className="text-gray-300">
                  Discover amazing cocktail recipes for both professional
                  bartenders and home enthusiasts.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-300 hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/search"
                      className="text-gray-300 hover:text-white"
                    >
                      Search Recipes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/random"
                      className="text-gray-300 hover:text-white"
                    >
                      Random Cocktail
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-300 hover:text-white">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-300 hover:text-white">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <p className="text-gray-300 text-sm mt-4">
                      Please drink responsibly. Must be of legal drinking age.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
              <p>
                &copy; {new Date().getFullYear()} Cocktail Recipe App. All
                rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
