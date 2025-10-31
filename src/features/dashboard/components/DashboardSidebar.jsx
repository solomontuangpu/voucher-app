"use client";
import { LayoutDashboard, Package } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const DashboardSidebar = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <aside
      id="default-sidebar"
      className={`relative top-0 left-0 z-40 h-screen w-72 transform transition-transform duration-300 ${toggle ? "translate-x-0" : "-translate-x-50"} `}
      aria-label="Sidenav"
    >
      <div className="h-full overflow-y-auto border-r border-gray-200 bg-white px-3 py-5 dark:border-gray-700 dark:bg-gray-800">
        <button
          onClick={handleToggle}
          className="absolute right-5 cursor-pointer rounded bg-red-400 px-2 py-1 text-white"
        >
          {toggle ? "close" : "open"}
        </button>

        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <LayoutDashboard className="text-gray-400" />
              <span className="ml-3">Overview</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/inventory"
              className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <Package className="text-gray-400" />
              <span className="ml-3">Inventory</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
