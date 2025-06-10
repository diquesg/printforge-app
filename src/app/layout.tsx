import "./globals.css";

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <header className="p-5">
          <nav className="flex max-w-screen">
            <img src="/printforge-logo-icon.svg" className="w-10"/>
            <ul className="flex uppercase items-center ml-auto gap-5">
              <li><a href="/">3D Models</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
