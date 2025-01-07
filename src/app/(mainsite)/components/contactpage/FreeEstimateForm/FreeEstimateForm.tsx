"use client"

import { useRef, useState } from "react"
import "./freeestimateform.css"
import sendEmail from "@/app/(mainsite)/controllers/sendEmail"
import MessageStatus from "./MessageStatus/MessageStatus"

export default function FreeEstimateForm() {

    const [status, setStatus] = useState("none")
    const formRef: any = useRef();


  return (
    <>
    <MessageStatus status={status} setStatus={setStatus}/>
    <form ref={formRef} id="estimateForm" onSubmit={(evt)=>{

        const data = Object.fromEntries(new FormData(formRef.current))
        data.Consented_To_SMS = (data.Consented_To_SMS == "on") ? "Yes" : "No";
        
        sendEmail(evt, setStatus, {
        receiverEmail: process.env.NEXT_PUBLIC_DELIVERY_EMAIL!,
        data: data
    }, formRef.current)}}>

        <h3 id="estimateFormTitle">Contact Us!</h3>

        {/* START FIELDS */}
            
       
            <div className="input-wrapper">
                <input required type="text" name="Name" id="name_input" placeholder={"Name"} />
            </div>
            
            <div className="input-wrapper">
                <input required type="tel" name="Phone_Number" id="phonenum" placeholder={"Phone Number"} />
            </div>
            <div className="input-wrapper">
               
            <input required type="email" name="Email" id="email" placeholder={"Email"} />
            </div>

            <div className="input-wrapper">
                <textarea required maxLength={5000} name="Details" id="messageInput" placeholder={"Additional details..."}></textarea>
            </div>
            <div className="input-wrapper checkbox">
                <input id="formCheck" type="checkbox" name="Consented_To_SMS" />
                <label htmlFor="formCheck">By checking this box I consent to receive SMS from {process.env.NEXT_PUBLIC_BUSINESS_NAME}. Reply STOP to opt-out; Reply HELP; Message and data rates apply; Messaging frequency may vary.</label>
            </div>
            
            <div className="center">
                <a onClick={(evt)=>{evt.preventDefault(); formRef.current.requestSubmit();}} className={`main-link`} id="estimateFormSubmit" type="submit">Submit</a>
            </div>

            {/* END FIELDS */}
        </form>
    </>
  )
}
