import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";
import "./../styles/globals.css";

export const metadata = {
  title: "Voucher App",
  description: "As ez as eating",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <NextTopLoader />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
