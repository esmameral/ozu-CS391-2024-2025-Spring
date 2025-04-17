'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuItems from "./components/MenuItems";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <MenuItems></MenuItems>
        {children}
      </body>
    </html>
  );
}
