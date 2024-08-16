import { useEffect, useState } from "react";
//its our custom hook
function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        // Check if currency is defined before making the request
        if (currency) {
            fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
                .then(response => response.json())
                .then(result => setData(result))
                .catch(error => console.error("Error fetching currency data:", error));
        }
    }, [currency]);

    return data;
}

export default useCurrencyInfo;