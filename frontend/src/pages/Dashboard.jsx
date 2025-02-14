import { Appbar } from "../components/Appbar"
import { Users } from "../components/Users"
import { Balance } from "../components/Balance"
import axios from "axios"
export function Dashboard() {
    async function fetchbalance() {
        const response = await axios.get("http://localhost:3000/api/v1/accounts/balance",{
            headers:{
                Authorization : "Bearer "+ localStorage.getItem("token")
            }
        })
        return response.data.balance;
    }

    return (
        <div>
            <Appbar />
            <Balance value={fetchbalance} />
            <Users />
        </div>

    )
}

