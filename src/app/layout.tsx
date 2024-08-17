import Header from "/src/app/components/Header";
import ".//globals.css";
import Login from "/src/app/Login"
import contact from "/src/app/contact"
import Footer from "/src/app/components/Footer"
import signup from "/src/app/signup"
import error from "/src/app/error"


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <error/>
        <signup/>
        <contact/>
      <login/>
      <Header/>
        {children}</body>
        <Footer/>
    </html>
  );
}
