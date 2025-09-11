"use client";
import useSWR from "swr";
import InventoryTable from "./InventoryTable";
import { productApiUrl, productFetcher } from "@/services/product";

const InventorySection = () => {
  const { data, isLoading, error } = useSWR(productApiUrl, productFetcher);

  if (isLoading) return <div>Loading...</div>;

  return (
    <section className="px-3 dark:bg-gray-900">
      <h3 className="py-5 text-2xl font-semibold">Inventories</h3>
      <InventoryTable products={data?.data} />
    </section>
  );
};

export default InventorySection;
