import React, { Component } from "react";
// import axios from "axios";


export default class Fullmenu extends React.Component {
	constructor (props) {
        super(props) 
            this.state = {
                item: [ ],
        }
    }
    //   async  getData ( ) {
    //     //   return 
    //       let data =  await  ( await fetch ( "https://cors-anywhere.herokuapp.com/https://amadeus-restaurant.firebaseio.com/menu.json" ) )
    //      console.log (data.Desserts  )
    //       return data
           
    //     }

     

        componentDidMount ( ) {
            // this.getData ( ) 
            fetch ( "https://cors-anywhere.herokuapp.com/https://amadeus-restaurant.firebaseio.com/menu" )
                .then ( response => {
                    response.json
                    console.log ( "response" , response  )
                    .then ( json => { 
                        this.setState ( { item: json } )
                        console.log ( "json" , json, this.state)
                    } );                    
                } )

        } 

        getID = id => console.log (id)
          
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