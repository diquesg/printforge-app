import "./globals.css";
import { Montserrat_Alternates } from 'next/font/google'
import { Albert_Sans } from 'next/font/google'

const albert_sans = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-albert-sans'
});
const montserrat_alternates = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-montserrat-alternates'
});

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
