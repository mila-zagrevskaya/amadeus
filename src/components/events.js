import React from "react";
import { Link } from "react-router-dom";

const events = [
    {   src: "./images/event1.png",
        title: "Live Music Fridays",
        date: "",
        time: "",
        text: "",
        id: 1
    },
    {   src: "./images/event2.png",
        title: "Louis XII Food Festival",
        date: "",
        time: "",
        text: "",
        id: 2
    },
    {   src: "./images/event3.png",
        title: "Magic show with Karim Diaw",
        date: "",
        time: "",
        text: "",
        id: 3       
    }
]

export default class EventsBlock extends React.Component {
	constructor (props) {
        super(props) 
        //   this.state = {

        //   }
    }
        render() {
            return (
                <>
                { events.map (
                    el =>  (
                        <div className="events-block" key = { el.id }>
                            <div className="poster" >
                                <img src = { el.src }  alt="eventpict"/>
                                <div className="text-poster-block" >
                                    <h6> { el.title } </h6>

                                    <Link to = "#"> Read more ...</Link>
                                </div>
                            </div>
                        </div>    
                ) ) }    
            </>        
            )
        }
}