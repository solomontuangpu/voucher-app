"use client";``

import InventoryTableRow from "./InventoryTableRow";
import InventoryTableHeader from "./InventoryTableHeader";
import InventoryTableFooter from "./InventoryTablePagination";

const InventoryTable = ({products}) => {

  return (
    <div className="relative overflow-hidden bg-white shadow-md sm:rounded-lg dark:bg-gray-800">
      <InventoryTableHeader />
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3">
                Product name
              </th>

              <th scope="col" className="px-4 py-3">
                Price
              </th>
              <th scope="col" className="px-4 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              products?.map((product) => (
                <InventoryTableRow key={product.id} {...product} />
              ))
            }
          </tbody>
        </table>
      </div>
      <InventoryTableFooter />
    </div>
  );
};

export default InventoryTable;
