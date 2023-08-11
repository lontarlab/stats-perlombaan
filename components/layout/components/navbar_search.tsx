import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function NavbarSearch() {
  const listItem = [
    {
      name: "Master Barang",
      route: "/master/barang",
    },
    {
      name: "Master Cluster",
      route: "/master/cluster",
    },
    {
      name: "Master Jenis",
      route: "/master/jenis_barang",
    },
    {
      name: "Master Sales",
      route: "/master/sales",
    },
    {
      name: "Master Outlet",
      route: "/master/outlet",
    },
    {
      name: "Data DOA",
      route: "/doa/data",
    },
    {
      name: "Aktivasi DOA",
      route: "/doa/aktivasi",
    },
    {
      name: "Program",
      route: "/program",
    },
    {
      name: "Alokasi Sales",
      route: "/stok/alokasi_sales",
    },
    {
      name: "Stok Gudang",
      route: "/stok/gudang",
    },
    {
      name: "Stok In Hand",
      route: "/stok/in_hand",
    },
    {
      name: "Report Penjualan",
      route: "/report/lph",
    },
    {
      name: "Manage Credit",
      route: "/tools/manage_credit",
    },
    {
      name: "Manage User",
      route: "/tools/manage_user",
    },
  ];
  const [filteredList, setFilteredList] = useState([] as {name:string, route:string}[]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    if(search.length > 1){

    const data = [] as { name: string; route: string }[];
    listItem.map((e) => {
      if (e.name.toLowerCase().includes(search.toLowerCase())) {
        data.push(e);
      }
      setFilteredList(data);
    });
    }
  }, [search]);
  return (
    <form
      autoComplete="off"
      className="hidden sm:inline-block md:hidden lg:inline-block mx-5"
    >
      <div className="flex flex-wrap items-stretch relative">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="flex-shrink flex-grow max-w-full leading-5 relative text-sm py-2 px-4 rounded-l text-gray-800 bg-gray-100 overflow-x-auto focus:outline-none border border-gray-100 focus:border-gray-200 focus:ring-0"
          placeholder="Search…"
        />
        <div className="flex -mr-px">
          <button
            className="hover:cursor-default flex items-center py-2 px-4 -ml-1 rounded-r  leading-5 text-gray-100 bg-indigo-500 border border-indigo-500 "
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </div>
        <div className={`${search.length > 0 ? "opacity-100" : "opacity-0"}  max-w-sm overflow-hidden transition-all absolute bg-white flex flex-col flex-auto  w-[13.5rem]`}>
          {filteredList.map(e=>
          <Link onClick={()=>setFilteredList([])} href={e.route} className="p-2 border">
              {e.name}
          </Link>
          )}
        </div>
    </form>
  );
}
