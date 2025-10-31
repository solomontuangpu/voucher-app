"use client";
import useSWR from "swr";
import InventoryTable from "./InventoryTable";
import { productApiUrl, productFetcher } from "@/services/product";
import InventoryTablePagination from "./InventoryTablePagination";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const InventorySection = () => {
  const searchParams = useSearchParams();
  const [fetchUrl, setFetchUrl] = useState(productApiUrl);

  const { data, isLoading, error } = useSWR(fetchUrl, productFetcher);

  useEffect(()=> {
    if(searchParams.get("q")){
      setFetchUrl(`${productApiUrl}?q=${searchParams.get("q")}`); 
    }
  }, []);


  if(error){
    return <p className=" text-red-400 text-center mt-10"> {error.message}</p>
  }

  return (
    <section className="px-3 dark:bg-gray-900">
      <h3 className="py-5 text-2xl font-semibold">Inventories</h3>
      <InventoryTable products={data?.data} isLoading={isLoading} setFetchUrl={setFetchUrl} />
      <InventoryTablePagination data={data} setFetchUrl={setFetchUrl} />
    </section>
  );
};

export default InventorySection;
