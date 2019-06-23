import React from "react";

import Button from "./button";
import Input from "./input";

// import Input from "./registration"



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
          this.handleChangeName = this.handleChangeName.bind(this)
		  this.handleChangeDate = this.handleChangeDate.bind(this)
		  this.handleChangeTime = this.handleChangeTime.bind(this)
		  this.handleChangePeople = this.handleChangePeople.bind(this)
		  this.handleChangeComments = this.handleChangeComments.bind(this)
          this.validate = this.validate.bind(this)
	  }  
	      
      handleChangeName(e) {
        this.setState({name: e.target.value})
        this.setState(this.validate)
      }
    
      handleChangeDate(e) {
        this.setState({date: e.target.value})
        this.setState(this.validate)
	  }
	  handleChangeTime(e) {
        this.setState({time: e.target.value})
        this.setState(this.validate)
	  }
	  handleChangePeople(e) {
        this.setState({people: e.target.value})
        this.setState(this.validate)
	  }
	  handleChangeComments(e) {
        this.setState({comments: e.target.value})
        this.setState(this.validate)
	  }
    
      validate(state) {
        return {
          valid: state.props === state.value
        }
      }
    
      render(){
        return (
			<form>
				<Input value={this.state.name}
					onChange={this.handleChangeName}
					id="name"
					name="name"
					label="Name *"
					// icon = "icon-user"
				/>
				<Input value={this.state.date}
					onChange={this.handleChangeDate}
					type = "date"
					required
					id="date"
					name="date"
					label="Date *"
					// icon = "icon-calendar"
				/>
				<Input value={this.state.time}
					onChange={this.handleChangeTime}
					type = "time"
					min = "10:00"
					max = "21:00"
					id="time"
					name="time"
					label="Time *"
					// icon = "icon-clock"
				/>
				<Input value={this.state.people}
					onChange={this.handleChangePeople}
					id="people"
					name="people"
					label= "How many people *"
					// icon = "icon-users"
				/>
				<Input value={this.state.comments}
					onChange={this.handleChangeComments}
					id="commensals"
					name="commensals"
					label= "Commensals "
				/>
				<Button type="submit" text="Find a table" className ="title-button form-btn" />
			</form>
        )
      }
      
    }
    