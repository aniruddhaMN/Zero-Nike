import "./globals.css";

export const metadata = {
  title: "Nike Pegasus 43",
  description: "Nike Pegasus 43 — Black/White-Volt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
