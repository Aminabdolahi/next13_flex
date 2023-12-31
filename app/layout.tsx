import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata = {
  title: 'Flexible',
  description: 'Show and discover remariable developer projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>

        <Navbar/>
        {children}
        <Footer/>
        </main>
        </body>
    </html>
  )
}
