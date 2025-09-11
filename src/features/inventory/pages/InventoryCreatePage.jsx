import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import InventoryCreateSection from "../components/InventoryCreateSection";
import BreadCrumb from "@/components/BreadCrumb";
import DashBoardLayout from "@/features/dashboard/components/DashboardLayout";

const InventoryCreatePage = () => {
  return (
    <DashBoardLayout>
      <DashboardHeader title="Create Inventory Item" />
      <BreadCrumb currentPage="Create" links={[{name: "Inventory", path: "/dashboard/inventory"}]} />
      <InventoryCreateSection />
    </DashBoardLayout>
  );
};

export default InventoryCreatePage;