import {useEffect,usestate} from "react"

function useCurrencyinfo(currency){
    const [data, setData] = usestate({})
    useEffect(()=>{
        fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/$%7Bcurrency%7D.json')
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    },[currency])
    console.log(data);
    return data
}

export default useCurrencyinfo;