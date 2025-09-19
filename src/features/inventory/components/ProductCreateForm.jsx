"use client";
import { storeProduct } from "@/services/product";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const ProductCreateForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (payloads) => {
    try {
      const res = await storeProduct(payloads);
      const json = await res.json();

      if (!res.ok) {
            setError("root", {
              message: json.message || "Something went wrong",
            });
            return;
      }
      reset();
      toast.success("Product created successfully");
    
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-5xl px-4 py-10">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          Add a new product
        </h2>

        {errors?.root && (
          <p className="mb-3 text-sm text-red-500">
            {" "}
            * {errors.root.message}
          </p>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 lg:grid-cols-4">
            {/* Product Name */}
            <div className="col-span-4 w-full lg:col-span-2">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Type product name"
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                {...register("product_name", {
                  required: "Product name is required",
                })}
              />
              {errors.product_name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.product_name.message}
                </p>
              )}
            </div>

            {/* Price */}
            <div className="col-span-4 w-full lg:col-span-2">
              <label
                htmlFor="price"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                type="number"
                step="1"
                id="price"
                placeholder="Enter product price"
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                {...register("price", {
                  required: "Price is required",
                  valueAsNumber: true,
                  min: { value: 0.01, message: "Price must be greater than 0" },
                })}
              />
              {errors.price && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.price.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-200 dark:focus:ring-primary-900 mt-4 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4 disabled:opacity-40 sm:mt-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Adding..." : "Add product"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ProductCreateForm;
