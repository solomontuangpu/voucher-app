import { productApiUrl, productFetcher } from "@/services/product";
import { debounce } from "lodash";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";

const useProducts = () => {
  const [fetchUrl, setFetchUrl] = useState(productApiUrl);
  const { data, isLoading, error } = useSWR(fetchUrl, productFetcher);

  const router = useRouter();
  const searchParams = useSearchParams();
  const searchRef = useRef();


  useEffect(() => {
    if (searchParams) {
      setFetchUrl(`${productApiUrl}?${searchParams}`);
    }
  }, [searchParams]);

  useEffect(() => {
    if (searchParams.get("q")) {
      searchRef.current.value = searchParams.get("q");
    }
  }, []);


  // control pagination
  const handleClick = (to) => {
    const url = data?.links[to];
    if (!url) return;
    const queryString = new URL(url).search;
    router.push(queryString); 
  };


// functions to control search 


const updateQueryParam = (key, value) => {
  const params = new URLSearchParams(searchParams.toString());

  if(value){
    params.set(key, value);
  }else{
    params.delete(key);
  }

  router.push(`?${params}`)
}
const handleSearch =debounce((e) => {
  const q = e.target.value;
  updateQueryParam("q", q);
},500)
const handleClearSearch = () => {
  searchRef.current.value = "";
  updateQueryParam("q", null);
}

  return {
    data,
    isLoading,
    error,
    searchRef,
    searchParams,
    setFetchUrl,
    handleClick,
    handleClearSearch,
    handleSearch
  };
};

export default useProducts;
