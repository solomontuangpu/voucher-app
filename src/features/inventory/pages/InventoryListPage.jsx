import BreadCrumb from "@/components/BreadCrumb";
import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import DashBoardLayout from "@/features/dashboard/components/DashboardLayout";
import InventorySection from "../components/InventorySection";

const InventoryListPage = () => {


  
  return (
    <DashBoardLayout>
      <DashboardHeader title="Inventory List" />
      <BreadCrumb currentPage="Inventory" />
      <InventorySection />
    </DashBoardLayout>
  );
};

export default InventoryListPage;
