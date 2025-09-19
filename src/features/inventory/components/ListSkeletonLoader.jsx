const ListSkeletonLoader = () => {
  return (
    <>
      <tr className="animate-pulse border-b dark:border-gray-700">
        <td className="px-4 py-3">
          <div className="h-4 w-5 rounded bg-gray-300 dark:bg-gray-600"></div>
        </td>
        <th
          scope="row"
          className="px-4 py-3 font-medium whitespace-nowrap text-gray-900 dark:text-white"
        >
          <div className="h-4 w-32 rounded bg-gray-300 dark:bg-gray-600"></div>
        </th>
        <td className="px-4 py-3">
          <div className="h-4 w-16 rounded bg-gray-300 dark:bg-gray-600"></div>
        </td>
        <td className="flex items-center gap-2 px-4 py-3">
          <div className="h-6 w-6 rounded bg-gray-300 dark:bg-gray-600"></div>
          <div className="h-6 w-6 rounded bg-gray-300 dark:bg-gray-600"></div>
          <div className="h-6 w-6 rounded bg-gray-300 dark:bg-gray-600"></div>
        </td>
      </tr>
    </>
  );
};

export default ListSkeletonLoader;
