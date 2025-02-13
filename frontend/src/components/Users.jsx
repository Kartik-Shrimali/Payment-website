const users = ["kartik", "anmol"]
import {Button} from "../components/Button"
export function Users() {
    return (
        <div>
            <div className="font-bold text-black text-xl pt-5">
                Users
            </div>
            <div className="pl-2 pr-2 ">
                <input type="text" placeholder="Search Users" className="w-full pl-1 border-rounded border-black-200 border-3" />
            </div>
            <div>
                {users.map(user => <User user={user} />)}
            </div>
        </div>
    )
}

function User({ user }) {
    return (
        <div>
            <div className="flex justify-between mt-5">
                <div className = "flex justify-center">
                    <div className="flex justify-center items-center text-2xl  rounded-full bg-gray-300  w-10 h-10  ">
                        {/* {user.firstname.[0]}; */}H
                    </div>
                    <div className=" ml-5 font-bold text-xl text-center mt-1 ">
                        {/* {user.firstname}{user.lastname} */}Kartik
                    </div>
                </div>

                <div>
               <Button onClick = {console.log("clicked")}label={"Send Money"}/>
                </div>
            </div>

        </div>
    )
}