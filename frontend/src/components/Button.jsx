export function Button({label , onClick}){
    return (
        <button onClick = {onClick}type="button" className="flex justify-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 wd-full pt-2 pb-2 pr-20 pl-20 m-2 ml-0 w-70 ">{label}</button>
    )
}