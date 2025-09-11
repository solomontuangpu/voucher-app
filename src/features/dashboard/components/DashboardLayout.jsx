"use client";
import { useEffect } from "react";
import DashboardSidebar from "./DashboardSidebar";
import useAccountStore from "@/stores/useAccountStore";
import { useRouter } from "next/navigation";

const DashBoardLayout = ({ children }) => {
  const { token } = useAccountStore.getState();

  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token]);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <DashboardSidebar />
      </div>
      <div className="col-span-10">
        {children}
      </div>
    </div>
  );
};

export default DashBoardLayout;
