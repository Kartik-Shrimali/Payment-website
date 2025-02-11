import {Link} from "react-router-dom"
export function BottomWarning({label , LinkText , to}){
    return(
        <div>
            <div className = "text-black text-lg inline-block">
                {label}
            </div>
            <Link className = " pb-20 text-black text-lg underline cursor-pointer" to={to}>{LinkText}</Link>
        </div>
    )
}