import React from "react";

export default class Input extends React.Component {
    constructor (props) {
        super(props) 
          this.state = {value: '', password2: '', valid: false}
          this.handleChange = this.handleChange.bind(this)
          this.handleChange2 = this.handleChange2.bind(this)
          this.validate = this.validate.bind(this)
      }  
    
      handleChange(e) {
        this.setState({value: e.target.value})
        this.setState(this.validate)
      }
    
      handleChange2(e) {
        this.setState({password2: e.target.value})
        this.setState(this.validate)
      }
    
      validate(state) {
        return {
          valid: state.value === state.password2
        }
      }
    
      render(){
        return (
          <>
          <input value={this.state.value}
                 onChange={this.handleChange}
                 style={{backgroundColor: this.state.valid ? '' : '#F99'}}
          />
          <input value={this.state.password2}
                 onChange={this.handleChange2}
                 style={{backgroundColor: this.state.valid ? '' : '#F99'}}
          />
          </>
        )
      }
      
    }
    
