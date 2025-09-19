"use client";

import InventoryTableRow from "./InventoryTableRow";
import InventoryTableMenu from "./InventoryTableMenu";
import InventoryTableHeader from "./InventoryTableHeader";
import EmptyData from "./EmptyData";
import ListSkeletonLoader from "./ListSkeletonLoader";

const InventoryTable = ({ products, isLoading }) => {
  return (
    <div className="relative overflow-hidden bg-white shadow-md sm:rounded-lg dark:bg-gray-800">
      <InventoryTableMenu />
      <div className="overflow-x-auto">
        <table className=" table-fixed w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <InventoryTableHeader />

          <tbody>
            {isLoading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <ListSkeletonLoader key={i} />
              ))
            ) : !products?.length ? (
              <EmptyData />
            ) : (
              products?.map((product) => (
                <InventoryTableRow key={product.id} {...product} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryTable;
