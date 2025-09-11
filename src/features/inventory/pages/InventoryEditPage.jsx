import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import InventoryEditSection from "../components/InventoryEditSection";
import BreadCrumb from "@/components/BreadCrumb";
import DashBoardLayout from "@/features/dashboard/components/DashboardLayout";

const InventoryEditPage = () => {
  return (
    <DashBoardLayout>
      <DashboardHeader title="Edit Inventory Item" />
      <BreadCrumb
        currentPage="Edit"
        links={[{ name: "Inventory", path: "/dashboard/inventory" }]}
      />
      <InventoryEditSection />
    </DashBoardLayout>
  );
};

export default InventoryEditPage;
