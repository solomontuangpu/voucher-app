const InventoryTableRow = (product) => {

  return (
    <tr className="border-b dark:border-gray-700">
      <th
        scope="row"
        className="px-4 py-3 font-medium whitespace-nowrap text-gray-900 dark:text-white"
      >
        {product.product_name}
      </th>
      <td className="px-4 py-3">{product.price}</td>
      <td className="flex items-center px-4 py-3">
        <button>Show</button>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default InventoryTableRow;
