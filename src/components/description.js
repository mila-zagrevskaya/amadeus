import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../actions/remote";

import Button from "../components/button"



// export  class Description extends Component {
// 	state = { 
//         overflow:  "hidden",
//         title: "",
//         text: ""
//     };

//     close = () => this.setState({ overflow:  "hidden" });

// 	open = () => this.setState({ overflow:  "visible" });

//     componentDidMount() {
// 		this.props.getPosts();
//     }
    
//     showMoreInfo = (  ) => {
//         this.open ( );
//     }

//     render ( ) {
//         const { postList,
//                     showMoreInfo } = this.props;
       
//         return (
//             <div className = "text-about">
//                 <h2> { this.state.title }</h2>
//                 { postList.map ( ( el, index )=> {
//                    <p key = { index } text = {el} >  </p>
//                 } ) }
//                 <Button className="title-button more" text= "Show more ..." onClick= { showMoreInfo }/>
// 			</div>                      
//          ) 
//     }
// }


// const mapStateToProps = state => {
// 	return {
//         postList: state.remote.postList,
//         showMoreInfo: state.remote.showMoreInfo
// 	};
// };

// export default connect(
// 	mapStateToProps,
// 	{
//         getPosts,
//         showMoreInfo
// 	}
// )(Remote);









export default ({ text, title, parag1, span, parag2, btnText, eventHandler, ...rest }) => (
    <div className="text-about">
        <h2> {title}</h2>
        <p>{ parag1} <span>{span}</span></p>
        <p>{ parag2} </p>
        <Button className="title-button more" text={btnText} onClick= {eventHandler}/>
    </div>
   
)