import React from 'react'
import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import {useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

export function Signin(){
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();
    
    return(
        <div className="bg-slate-300 h-screen flex justify-center">
                    <div className="flex flex-col justify-center">
                        <div className="rounded-lg bg-white w-80 text-centre p-2 h-max px-4">
                            <div>
                                <Heading label={"Signin"} />
                                <SubHeading description={"Enter your credentials to access your account"} />
                                <InputBox onChange ={(e)=>{
                                    setUsername(e.target.value);
                                }} label={"Email/Username"} Textboxinput={"test@example.com"} />
                                <InputBox onChange = {(e)=>{
                                    setPassword(e.target.value)
                                }} label={"Password"} Textboxinput={"12345"} />
                                <Button onClick={async()=>{
                                    let response = await axios.post("http://localhost:3000/api/v1/users/signin" , {
                                        username ,
                                        password
                                    });
                                    localStorage.setItem("token" , response.data.token);
                                    navigate("/info")
                                }} label={"Sign In"} />
                                <BottomWarning label={"Want to create a new account?"} LinkText={"Signup"} to={"/signup"} />
                            </div>
                        </div>
                    </div>
        
                </div>
    )
}