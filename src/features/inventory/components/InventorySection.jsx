"use client";
import useSWR from "swr";
import InventoryTable from "./InventoryTable";
import { productApiUrl, productFetcher } from "@/services/product";
import InventoryTablePagination from "./InventoryTablePagination";
import { useState } from "react";

const InventorySection = () => {
  const [fetchUrl, setFetchUrl] = useState(productApiUrl);

  const { data, isLoading, error } = useSWR(fetchUrl, productFetcher);

  

  return (
    <section className="px-3 dark:bg-gray-900">
      <h3 className="py-5 text-2xl font-semibold">Inventories</h3>
      <InventoryTable products={data?.data} isLoading={isLoading} setFetchUrl={setFetchUrl} />
      <InventoryTablePagination data={data} setFetchUrl={setFetchUrl} />
    </section>
  );
};

export default InventorySection;
