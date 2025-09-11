import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

const BreadCrumb = ({ currentPage, links = [] }) => {
  console.log(links)
  return (
    <nav className="flex px-4 py-3 shadow-sm" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <Home className="me-2.5" />
            Home
          </Link>
        </li>
        {links?.map((link, index) => (
          <li key={`${index}link`}>
            <div className="flex items-center">
              <ChevronRight />
              <Link
                href={link.path}
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                {link.name}
              </Link>
            </div>
          </li>
        ))}
        <li aria-current="page">
          <div className="flex items-center">
            <ChevronRight />
            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
              {currentPage}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumb;
