import "@styles/main.scss";
import { Poppins } from "next/font/google";
import { Navbar } from "@components/common";
import JotaiProvider from "@jotai/JotaiProvider";

export const metadata = {
  title: "PenPoint",
  description: "PenPoint is a web app for writing and sharing notes.",
};

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FunctionComponent<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className={poppins.className}>
      <body className="container">
        <JotaiProvider>
          <Navbar />
          <main className="main">{children}</main>
        </JotaiProvider>
      </body>
    </html>
  );
};

export default RootLayout;
