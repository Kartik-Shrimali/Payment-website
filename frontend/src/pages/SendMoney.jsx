import { useSearchParams } from "react-router-dom"
import axios from "axios"
import {useState} from "react"

export function SendMoney() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id")
    const name = searchParams.get("name")
    const[amount , setAmount] = useState(0);

    return (
        
        <div className="flex justify-center items-center h-screen bg-gray-300">
            <div className=" justify-center items-center bg-white shadow-lg rounded-lg p-8">
                <div className="font-bold text-black text-3xl text-center">
                    Send Money
                </div>
                <div className="flex mt-6 items-center">
                    <div className="flex bg-green-600 items-center font-bold text-white text-2xl h-10 w-10 rounded-full justify-center content-center">
                        {name[0].toUpperCase()}
                    </div>
                    <div className="font-bold text-xl text-black mt-1 ml-2    ">
                        {name}
                    </div>
                </div>
                <div className="font-semibold text-lg mt-2">
                    Amount(in Rs)
                </div>
                <input onChange = {(e)=>{
                    setAmount(e.target.value);
                }} placeholder="Enter Amount" className="w-full border-2 mt-2 border-gray-200"></input>
                <button onClick={async(e)=>{
                    await axios.post("http://localhost:3000/api/v1/accounts/transfer",{
                        id : id,
                        amount : amount
                    } , {
                        headers : {
                            Authorization : "Bearer "+ localStorage.getItem("token")
                        }
                    })
                }} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-full mt-2">Initiate Transfer</button>
            </div>



        </div>
    )
}