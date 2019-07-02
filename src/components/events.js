import React from "react";
import { Link } from "react-router-dom";

const events = [
    {   src: "./images/event1.png",
        title: "Live Music Fridays",
        date: "February 28th",
        time: "6:00 PM",
        text: "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio non mauris. ",
        id: 1
    },
    {   src: "./images/event2.png",
        title: "Louis XII Food Festival",
        date: "March 12th",
        time: "12:00 PM",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum atque, odit optio veritatis. ",
        id: 2
    },
    {   src: "./images/event3.png",
        title: "Magic show with Karim Diaw",
        date: "March 22nd",
        time: "8:00 PM",
        text: " Vel aliquid porro repellendus neque impedit assumenda quas a libero.",
        id: 3       
    }
]

export default class EventsBlock extends React.Component {
	constructor (props) {
        super(props) 
          this.state = {
            
          }
    }
        render() {
            return (
                <>
                { events.map (
                    el =>  (
                        <div className="events-block" key = { el.id }>
                            <div className="poster" >
                                <img src = { el.src }  className = "poster-img" alt="eventpict"/>
                                <div className="text-poster-block" >
                                    <h6> { el.title } </h6>
                                    <div className="date">
                                        <time dateTime={ el.date } className = "icon-calendar"> { el.date } </time>
                                        <time className = "icon-clock">{el.time}</time>
                                    </div>
                                    <p className="event-text"> {el.text} </p>
                                    <Link to = "#" className = "read-more"> Read more ...</Link>
                                </div>
                            </div>
                        </div>    
                ) ) }    
            </>        
            )
        }
}