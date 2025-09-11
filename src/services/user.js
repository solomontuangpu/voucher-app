import { token } from "./profile";

export const userApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/user-profile/profile`;

export const userFetcher = (...args) => fetch(...args, {
    method: "GET",
    headers: {
        "Authorization": `Bearer ${token}`
    }
}).then((res) => res.json());