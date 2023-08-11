import React from "react";
import OpenIcon from "./icon_open";
import CloseIcon from "./icon_close";

export default function Navbar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Function;
}) {
  return (
    <nav
      className={`z-50 fixed flex flex-row flex-nowrap items-center justify-between mt-0 py-2 px-6 bg-white shadow-sm transition-all duration-500 ease-in-out left-0 right-0  ${
        open
          ? "left-64 -right-64 md:left-0 md:right-0"
          : "left-0 right-0 md:left-64"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center justify-center text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-0"
      >
        {open ? <OpenIcon /> : <CloseIcon />}
      </button>
    </nav>
  );
}
