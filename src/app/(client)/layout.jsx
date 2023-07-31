import "~/styles/globals.css";
import { Header, Footer } from "~/app/components";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function ClientLayout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
