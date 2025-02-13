import { Appbar } from "../components/Appbar"
import {Users} from "../components/Users"
export function Dashboard() {
    return (
        <div>
            <Appbar />
            <div>
                <div className = "text-black font-bold ">
                    Your Balance :
                </div>
                {/* <div>
                     {value}; 
                </div> */}
            </div>
             <Users />
        </div>

    )

}