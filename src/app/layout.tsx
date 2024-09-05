import Header from "../../src/app/components/Header";
import ".//globals.css";
import Footer from "../../src/app/components/Footer"
import React from "react";


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
      <Header/>
        {children}</body>
        <Footer/>
    </html>
  );
}
