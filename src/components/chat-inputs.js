import React from "react";



export default class ChatInputs extends React.Component {
    constructor (props) {
        super(props) 
        this.state = {
            nick: "",
            message: ""
        }
    }

        render() {
            console.log (this.props)
            return (
                <div className = "input-box">
                <input placeholder = "Nick"  
                        value = {this.state.nick}
                        onChange = { e => this.setState ( {nick : e.target.value} ) }
                />
                <input placeholder = "Message" 
                     value = {this.state.message}
                     onChange = { e => this.setState ( {message : e.target.value})}
                />
                <button  
                    disabled = { ( this.state.nick.length && this.state.message.length ) === 0 }
                    onClick = { ( ) => {this.props.onSend ( this.state.nick, this.state.message ) 
                                       this.setState ( { nick: "" } )
                                       this.setState ( { message : ""  } )             
                    } } 
                > Send ...   </button>
            </div>
            )
        }
        static get defaultProps () {
            return {
                onSend ( ) {
                    throw new Error ( "Looks like you've forget onSend prop  in ChatInputs" )
                }
        }
}
}





// className = "title-button  form-btn"