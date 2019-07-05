import React from "react";

import Button from "./button";
import Input from "./input";




export default class Form extends React.Component {
	constructor (props) {
        super(props) 
          this.state = {
			  value: "",
			  name: "", 
			  date: "",
			  time: "",
			  people: "",
			  comments: "",
			  valid: false
			}
	  }  
	      
      handleChangeName = (e)  => {
        this.setState({name: e.target.value})
        this.setState(this.validate)
      }
    
      handleChangeDate = (e)  =>  {
        this.setState({date: e.target.value})
        this.setState(this.validate)
	  }
	  handleChangeTime = (e)  =>  {
        this.setState({time: e.target.value})
        this.setState(this.validate)
	  }
	  handleChangePeople = (e)  => {
        this.setState({people: e.target.value})
        this.setState(this.validate)
	  }
	  handleChangeComments = (e)  => {
        this.setState({comments: e.target.value})
        this.setState(this.validate)
	  }
    
      validate =  (state) => {
        return {
		  valid: state.props === state.value
		//   valid: state.value.length < 2
        }
      }
    
      render(){
        return (
			<form  onSubmit = { event => event.preventDefault()}>
				<Input value={ this.state.name }
					onChange={ this.handleChangeName }
					id="name"
					name="name"
					label="Name *"
				/>
				<Input value={this.state.date}
					onChange={this.handleChangeDate}
					type = "date"
					min = { new Date ( ).toLocaleDateString ( ) }
					// required
					id = "date"
					name = "date"
					label = "Date *"
				/>
				<Input value={this.state.time}
					onChange={this.handleChangeTime}
					type = "time"
					min = "10:00"
					max = "21:00"
					id = "time"
					name = "time"
					label = "Time *"
				/>
				<Input value={this.state.people}
					onChange={this.handleChangePeople}
					id="people"
					name="people"
					type = "number"
					max = "20"
					min = "1"
					label= "How many people *"
				/>
				<Input value={this.state.comments}
					onChange={this.handleChangeComments}
					id="commensals"
					name="commensals"
					label= "Commensals "
				/>
				<input type="submit" text="Find a table" className ="title-button form-btn"  
				disabled = { ( this.state.name.length && this.state.date.length && this.state.time.length && this.state.people.length ) === 0 }/>
			</form >
        )
      }
      
    }
    