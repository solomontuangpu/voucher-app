"use client";

import useAccountStore from "@/stores/useAccountStore";
import { useRouter } from "next/navigation";
import { mutate } from "swr";


const LogoutButton = () => {
  const { logout } = useAccountStore();
  const router = useRouter()
  const handleLogout = async () => {
     mutate(() => true, undefined, { revalidate: false });
    await logout();
    router.push("/login");
  };
  return (
    <button onClick={handleLogout} className=" cursor-pointer bg-red-500 text-white rounded-sm px-3 py-1">
        Logout
    </button>
  );
};

export default LogoutButton;