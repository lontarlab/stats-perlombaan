import { useState } from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

export default function Layout({ children }: any) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sidebar open={open} />
      {/*Wrapper*/}
      <div
        className={`flex flex-col min-h-screen transition-all duration-500 ease-in-out  mr-0  ${
          open ? "ml-64 -mr-64 md:ml-0 md:mr-0" : "ml-0 mr-0 md:ml-64 "
        }`}
      >
        <Navbar open={open} setOpen={setOpen} />
        <main className="pt-20 -mt-2">{children}</main>
      </div>
    </>
  );
}
