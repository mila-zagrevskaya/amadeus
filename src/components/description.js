import React from "react";
import {Link}  from "react-router-dom"
// import { connect } from "react-redux";
// import { getPosts, showMoreInfo } from "../actions/remote";

import Button from "../components/button"


export default ({ text, title, parag1, span, parag2, btnText, eventHandler, flag, ...rest }) => (
    <div className="text-about">
        <h2> {title}</h2>
        <p>{ parag1} <span>{span}</span></p>
        <p>{ parag2} </p>
         {  flag ? <Link to = "/viewmenu" className="title-button more" > {btnText} </Link> : 
             <Button className="title-button more" text={btnText} onClick= {eventHandler}/> }
    </div>
   
)


















// export  class Description extends Component {
// 	state = { 
//         overflow:  "hidden",
//         title: "",
//         text: "",
//         postList: []
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
//                 {
//                     // console.log('get',this.props.getPosts());
//                     console.log ( 'get', postList )
//                     /* <h2> { this.state.title }</h2>
//                 { postList.map ( ( el, index )=> {
//                    <p key = { index } text = {el} >  </p>
//                 } ) } */}
//                 <Button className="title-button more" text= "Show more ..." onClick= { showMoreInfo }/>
// 			</div>                      
//          ) 
//     }
// }


// const mapStateToProps = state => {
// 	return {
//         postList: state.remote,
//         // showMoreInfo: state.remote.showMoreInfo
// 	};
// };

// export default connect(
// 	mapStateToProps,
// 	{
//         getPosts,
//         showMoreInfo
// 	}
// )(Description);



