import React from "react";
// import { GoogleMap, Marker } from "react-google-maps";

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export default  class Form extends React.Component { 
    constructor (props) {
        super(props) 
            render () 
                return (
                    <>
                        <GoogleMap
                            defaultZoom={8}
                            defaultCenter={{ lat: -34.397, lng: 150.644 }}
                        >
                            {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
                        </GoogleMap>

                        <MyMapComponent isMarkerShown />// Map with a Marker
                        <MyMapComponent isMarkerShown={false} />// Just only Map
                    </>
                )
            }
    }





// export default class Form extends React.Component {
// 	constructor (props) {
//         super(props) 
//         const myMap = new google.maps.Map( {myMap}, options);
//         this.state = {
//             mapTypeId: 'hybrid',
//             center: {lat: 49.9967099, lng: 36.218107},
//             zoom: 12
//         }

//         <div class="map-container"> 
//             <div id="mymap"></div> 
//         </div>
//     }
// }