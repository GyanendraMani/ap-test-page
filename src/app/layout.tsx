import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import theme from "@/context/ThemeContext";
import { ThemeProvider } from '@mui/material/styles';

export const metadata: Metadata = {
  title: "Acharya Prasant",
  description: "by Acharya Prasant",
  icons: [{ rel: 'icon', url: "https://acharyaprashant.org/images/ic_favicon.png" }],

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://acharyaprashant.org/images/ic_favicon.png" sizes="any" />
      </head>
      <body style={{
        display: "block",
        margin: 'auto'
      }}>
        <ThemeProvider theme={theme}>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
