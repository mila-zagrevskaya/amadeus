import React from "react";
// import { Link } from "react-router-dom";
// import Button from "../components/button"
import Form from "../components/form"
import EventsBlock from "../components/events"

//  import Input from "../components/registration"
//  import ChatInputs from "../components/chat-inputs"

export default () => (
   
        <div className = "reserve-wrap">
            <div className = "cont">
                <h4>Make a Reservation</h4>
                <Form></Form>
            </div>
            <div className = "cont">
                <h4>Upcoming Events</h4>
                <EventsBlock></EventsBlock>
                {/* <Input></Input> */}
                {/* <ChatInputs onSend = { (nick, message) => console.log ( "ВОТКНУТЬ  в json.post ")}></ChatInputs> */}
            </div>
        </div>

)
