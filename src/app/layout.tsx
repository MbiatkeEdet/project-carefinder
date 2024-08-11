import Header from "/src/app/components/Header";
import ".//globals.css";
import Login from "/src/app/Login"
import Contact from "/src/app/Contact"


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
        <contact/>
      <login/>
      <Header/>
        {children}</body>
    </html>
  );
}
