import useAccountStore from "@/stores/useAccountStore";

export const productApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const productFetcher = (...args) =>
  fetch(...args, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  }).then((res) => res.json());

export const storeProduct = (payloads) => {
  return fetch(productApiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${useAccountStore.getState().token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payloads),
  });
};
