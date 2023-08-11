import React, { useState } from "react";
import { NavigationItem } from "../interfaces/navigation_item";
import NavbarLogo from "./navbar_logo";
import NavItem from "./nav_item";
import getConfig from "next/config";
import HealthIcon from "./icon_health";

export default function Sidebar({ open }: { open: boolean }) {
  const { publicRuntimeConfig } = getConfig();
  const [selected, setSelected] = useState(0);
  const navigationItems: NavigationItem[] = [
    {
      icon: <HealthIcon />,
      label: "Mengetik",
      route: "/mengetik",
      children: [
          {
          label: "Stats",
          route: "/mengetik/stats",
          role: ["User"],
        },
      ],
      role: ["User"],
    },
  ];
  return (
    <nav
      className={`fixed transition-all duration-500 ease-in-out h-screen bg-white shadow-sm text-gray-600 overflow-hidden ${
        open ? "w-64 md:w-0" : "w-0 md:w-64"
      }`}
    >
      <div className="h-full overflow-y-auto ">
        <NavbarLogo />
        <ul className="w-full float-none flex flex-col font-medium pl-1.5">
          {navigationItems.map((item, index) => (
            <NavItem
              key={index + item.label}
              navigationItem={item}
              selected={selected}
              setSelected={setSelected}
              index={index + 1}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
}
