import React from 'react'
import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"

export function Signup() {
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-centre p-2 h-max px-4">
                    <div>
                        <Heading label={"Signup"} />
                        <SubHeading description={"Enter your information to create account"} />
                        <InputBox label={"First Name"} Textboxinput={"Kartik"} />
                        <InputBox label={"Lastname"} Textboxinput={"Shrimali"} />
                        <InputBox label={"Username/Email"} Textboxinput={"test@example.com"} />
                        <InputBox label={"Password"} Textboxinput={"12345"} />
                        <Button label={"Sign Up"} />
                        <BottomWarning label={"Already have an account?"} LinkText={"Signin"} to={"/signin"} />
                    </div>
                </div>
            </div>

        </div>

    )

}