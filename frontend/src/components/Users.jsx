import { useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { Button } from "../components/Button"
export function Users() {
    const [users, setUsers] = useState([]);
    const [filter , setFilter] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/users/info?filter="+ filter, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }).then(response => {
            setUsers(response.data.users)
        });

    }, [filter])
    return (
        <div>
            <div className="font-bold text-black text-xl pt-5">
                Users
            </div>
            <div className="pl-2 pr-2 ">
                <input onChange={(e)=>{
                    setFilter(e.target.value)
                }} type="text" placeholder="Search Users" className="w-full pl-1 border-rounded border-black-200 border-3" />
            </div>
            <div>
                {users.map(user => <User user={user} />)}
            </div>
        </div>
    )
}

function User({ user }) {
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex justify-between mt-5">
                <div className="flex justify-center">
                    <div className="flex justify-center items-center text-2xl  rounded-full bg-gray-300  w-10 h-10  ">
                        {user.firstname[0].toUpperCase()}
                    </div>
                    <div className=" ml-5 font-bold text-xl text-center mt-1 ">
                         {user.firstname} {user.lastname} 
                    </div>
                </div>

                <div>
                    <Button onClick={(e)=>{
                        navigate("/sendmoney?id="+user._id+"&name="+user.firstname);
                    }} label={"Send Money"} />
                </div>
            </div>

        </div>
    )
}