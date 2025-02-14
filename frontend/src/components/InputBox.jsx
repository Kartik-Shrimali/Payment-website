export function InputBox({label , Textboxinput , onChange}){
    return(
        <div className = " ">
            <div className = "font-bold text-black text-lg">
                {label}
            </div>
            <div>
                <input onChange = {onChange} placeholder = {Textboxinput} className = "text-black text-lg border-solid border-2 border-gray-300 border-opacity-100 w-70"></input>
            </div>
        </div>
        
    )
}