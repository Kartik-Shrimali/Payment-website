import React from 'react'
import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"

export function Signup() {
    return (
        <div className = "flex justify-centre wd-full">
            <div>
                <Heading label={"Signup"} />
                <SubHeading description={"Enter your information to create account"} />
                <InputBox label={"First Name"} Textboxinput={"Kartik"} />
                <InputBox label={"Lastname"} Textboxinput={"Shrimali"} />
                <InputBox label={"Username/Email"} Textboxinput={"test@example.com"} />
                <InputBox label={"Password"} Textboxinput={"12345"} />
            </div>
        </div>
    )

}