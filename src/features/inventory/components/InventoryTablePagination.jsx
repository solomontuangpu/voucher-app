import { productApiUrl } from "@/services/product";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";


const InventoryTablePagination = ({ data, setFetchUrl }) => {

  const router = useRouter();
  
  const handleClick = (to) => {
   
    if (!`${data?.links[to]}`) return;


    const url = data?.links[to];
    const queryString = new URL(url).search;
    router.push(queryString);
    setFetchUrl(`${productApiUrl}${queryString}`);
  }

  return (
    <nav
      className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
        Showing
        <span className="font-semibold text-gray-900 dark:text-white">
          1-10
        </span>
        of
        <span className="font-semibold text-gray-900 dark:text-white">
          1000
        </span>
      </span>
      <ul className="inline-flex items-stretch -space-x-px">
        <li>
          <button
            onClick={()=>handleClick("prev")}
            type="submit"
            className="ml-0 flex h-full items-center justify-center rounded-l-lg border border-gray-300 bg-white px-3 py-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-40 disabled:pointer-events-none" 
            disabled={!data?.links?.prev}
          >
            <ChevronLeft />
          </button>
        </li>

        <li>
          <button
            type="submit"
            onClick={()=>handleClick("next")}
            className="flex h-full items-center justify-center rounded-r-lg border border-gray-300 bg-white px-3 py-1.5 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            disabled={!data?.links?.next}
          >
            <ChevronRight />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default InventoryTablePagination;
