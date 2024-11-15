import '@/app/ui/global.css';
import {inter } from '@/app/ui/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <h1>{JSON.stringify(inter.className)}</h1> */}
      {/* <body>{children}</body> */}
      <body className={`${inter.className} antialiased`}>{children}</body>
      
    </html>
  );
}
