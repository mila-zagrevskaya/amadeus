import React, { Component } from "react";
// import axios from "axios";


export default class Fullmenu extends React.Component {
	constructor (props) {
        super(props) 
            this.state = {
                partition: [ ],
                item: [ ],
                // data: [ ]
        }
    }
        componentDidMount ( ) {
            const data =  fetch ( "http://localhost:3000/menu" )
                .then ( response => {
                    response.json ()
                    .then ( json => {   
                        this.setState ( { item: json } )                                                    //пришел объект с массивами объектов
                        for ( let section in json ) {
                            // console.log (section)
                            // console.log ( json [ section ] ) 
                        }
                       
                        // console.log (this.state.item)      
                       
                    } );      
                  
                } )
 } 

        // getID = id => console.log (id)

    render () {
        const { item } = this.state;
        return (
            <div className = "full-menu">
                <ul className="menu">
                    {/* { item.map (
                        (el, index) => el.completed && (
                            <li key = {index} className = "card-menu">
                                <div>
                                    <h6>el.name</h6>
                                    <p> weight output, g. 
                                        <span> {el.description} </span>
                                    </p>
                                </div>
                                <p className="price"> {el.price}</p>
                            </li>
                        )
                    ) } */}
                </ul>
                
                
            </div>                      
         ) 
    }
}