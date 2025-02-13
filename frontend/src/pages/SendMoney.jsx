export function SendMoney() {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-300">
            
                <div className=" justify-center items-center bg-white shadow-lg rounded-lg p-8">
                    <div className="font-bold text-black text-3xl text-center">
                        Send Money
                    </div>
                    <div className="flex mt-6 items-center">
                        <div className="flex bg-green-600 items-center font-bold text-white text-2xl h-10 w-10 rounded-full justify-center content-center">
                            A
                        </div>
                        <div className="font-bold text-xl text-black mt-1 ml-2    ">
                            Friend's Name
                        </div>
                    </div>
                    <div className="font-semibold text-lg mt-2">
                        Amount(in Rs)
                    </div>
                    <input placeholder="Enter Amount" className="w-full border-2 mt-2 border-gray-200"></input>
                    <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-full mt-2">Initiate Transfer</button>
                </div>
            


        </div>
    )
}