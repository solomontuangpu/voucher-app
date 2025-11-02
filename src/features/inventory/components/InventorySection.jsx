"use client";
import InventoryTable from "./InventoryTable";
import InventoryTablePagination from "./InventoryTablePagination";
import useProducts from "../hooks/useProducts";

const InventorySection = () => {

  const {
    data,
    error,
    isLoading,
    handleClick,
   handleSearchInput
  } = useProducts();

 

  if(error){
    return <p className=" text-red-400 text-center mt-10"> {error.message}</p>
  }

  return (
    <section className="px-3 dark:bg-gray-900">
      <h3 className="py-5 text-2xl font-semibold">Inventories</h3>
      <InventoryTable products={data?.data} isLoading={isLoading} handleSearchInput = {handleSearchInput}   />
      <InventoryTablePagination data={data} handleClick={handleClick}  />
    </section>
  );
};

export default InventorySection;
