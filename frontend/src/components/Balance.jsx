import { useState, useEffect } from "react"
export function Balance({ value }) {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        async function fetchbalance(){
            let response = await value();
            setBalance(response);
        }
        fetchbalance();
    }, [value])
    return (
        <div>
            <div className="text-black font-bold ">
                Your Balance : {balance}
            </div>
        </div>
    )
}