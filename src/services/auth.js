const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const loginUser = (payloads) => {
    return fetch(`${apiUrl}/login`, {
        method : "POST",
        body: JSON.stringify(payloads),
        headers : {
            "Content-type" : "application/json"
        }
    })
}

export const registerUser = (payloads) => {
    return fetch(`${apiUrl}/register`, {
        method: "POST",
        body: JSON.stringify(payloads),
        headers : {
            "Content-type" : "application/json"
        }
    })
}