import { ChevronDown, FilterIcon, PlusIcon, SearchIcon } from "lucide-react";
import Link from "next/link";

const InventoryTableHeader = () => {
  return (
    <div className="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-y-0 md:space-x-4">
      <div className="w-full md:w-1/2">
        <form className="flex items-center">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon size={20} className="text-gray-500" />
            </div>
            <input
              type="text"
              id="simple-search"
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="Search"
              required
            />
          </div>
        </form>
      </div>
      <div className="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-y-0 md:space-x-3">
        <Link
         href={"inventory/create"}
          className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white focus:ring-4 focus:outline-none"
        >
          <PlusIcon size={20} className="mr-2" />
          Add product
        </Link>

        <button
          id="filterDropdownButton"
          data-dropdown-toggle="filterDropdown"
          className="hover:text-primary-700 flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 focus:outline-none md:w-auto dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          type="button"
        >
          <FilterIcon size={20} className="mr-2 text-gray-500" />
          Filter
          <ChevronDown size={20} className="ml-2 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default InventoryTableHeader;
