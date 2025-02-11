import React from 'react'
import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"

export function Signin(){
    return(
        <div className="bg-slate-300 h-screen flex justify-center">
                    <div className="flex flex-col justify-center">
                        <div className="rounded-lg bg-white w-80 text-centre p-2 h-max px-4">
                            <div>
                                <Heading label={"Signin"} />
                                <SubHeading description={"Enter your credentials to access your account"} />
                                <InputBox label={"Email/Username"} Textboxinput={"test@example.com"} />
                                <InputBox label={"Password"} Textboxinput={"12345"} />
                                <Button label={"Sign In"} />
                                <BottomWarning label={"Want to create a new account?"} LinkText={"Signup"} to={"/signup"} />
                            </div>
                        </div>
                    </div>
        
                </div>
    )
}