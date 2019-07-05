import React from "react";
import Form from "../components/form"
import EventsBlock from "../components/events"



export default () => (
   
        <div className = "reserve-wrap">
            <div className = "cont">
                <h4>Make a Reservation</h4>
                <Form />
            </div>
            <div className = "cont">
                <h4>Upcoming Events</h4>
                <EventsBlock/>
            </div>
        </div>

)
