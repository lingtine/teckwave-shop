"use client";
import "~/styles/globals.css";
import { inter } from "./fonts";
import Providers from "~/redux/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
  return (
    <html
      http-equiv="Content-Security-Policy"
      content="upgrade-insecure-requests"
       lang="en"
    >
      <body suppressHydrationWarning className={inter.className}>
        <Providers>{children}</Providers>
        <ToastContainer />
      </body>
    </html>
  );
}
