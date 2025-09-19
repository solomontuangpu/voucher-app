const InventoryTableHeader = () => {
  return (
    <thead className="bg-gray-50 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className=" w-10 px-4 py-3">
          #
        </th>
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
  );
};

export default InventoryTableHeader;