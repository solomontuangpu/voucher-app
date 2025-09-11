

import { User2Icon } from "lucide-react";
import LogoutButton from "./LogoutButton";


const DashboardHeader = ({ title = "Dashboard" }) => {

  return (
    <div className="flex items-center justify-between px-4 py-4">
      <h1 className="text-gray-700">{title}</h1>
      <div className="flex items-center gap-10">
        <p className="flex items-center gap-1  text-gray-500">
          <User2Icon />

        username
         </p>
        <LogoutButton />
      </div>
    </div>
  );
};

export default DashboardHeader;
