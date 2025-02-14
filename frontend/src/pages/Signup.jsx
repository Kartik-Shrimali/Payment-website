import React from 'react'
import{useState} from 'react'
import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import axios from "axios"
import {useNavigate} from "react-router-dom"

export function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-centre p-2 h-max px-4">
                    <div>
                        <Heading label={"Signup"} />
                        <SubHeading description={"Enter your information to create account"} />
                        <InputBox onChange={e => {
                            setFirstName(e.target.value)
                        }} label={"First Name"} Textboxinput={"Kartik"} />
                        <InputBox onChange={e => {
                            setLastName(e.target.value)
                        }} label={"Lastname"} Textboxinput={"Shrimali"} />
                        <InputBox onChange={e => {
                            setUserName(e.target.value)
                        }} label={"Username/Email"} Textboxinput={"test@example.com"} />
                        <InputBox onChange={e => {
                            setPassword(e.target.value)
                        }} label={"Password"} Textboxinput={"12345"} />
                        <Button onClick ={async()=>{
                            let response = await axios.post("http://localhost:3000/api/v1/users/signup" , {
                                username : userName,
                                firstname :firstName,
                                lastname : lastName,
                                password : password
                            });
                            localStorage.setItem("token",response.data.token);
                            navigate("/info");

                        }} label={"Sign Up"} />
                        <BottomWarning label={"Already have an account?"} LinkText={"Signin"} to={"/signin"} />
                    </div>
                </div>
            </div>

        </div>

    )

}