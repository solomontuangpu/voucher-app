import { deleteProduct } from "@/services/product";
import { PenSquareIcon, Trash2Icon, ViewIcon } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

const InventoryTableRow = (product) => {

  const handleDelete = async () => {
    if(!confirm("Are you sure?")) return;
    try {
      const res = await deleteProduct(product.id);
      const json = await res.json();
      if(!res.ok){
        throw new Error(json.message)
      }
      toast.success("Product has been deleted");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <tr className="border-b dark:border-gray-700">
      <th
        scope="row"
        className="px-4 py-3 font-medium whitespace-nowrap text-gray-900 dark:text-white"
      >
        {product.product_name}
      </th>
      <td className="px-4 py-3">{product.price}</td>
      <td className="flex items-center gap-2 px-4 py-3">
        <Link href={""} className="cursor-pointer active:scale-90">
          <ViewIcon />
        </Link>
        <Link
          href={`/dashboard/inventory/${product.id}/edit`}
          className="cursor-pointer active:scale-90"
        >
          <PenSquareIcon />
        </Link>
        <button
          onClick={handleDelete}
          className="cursor-pointer active:scale-90"
        >
          <Trash2Icon />
        </button>
      </td>
    </tr>
  );
};

export default InventoryTableRow;
