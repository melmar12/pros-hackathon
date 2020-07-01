// import React, {Component} from 'react';
//
// import FlightContainer from "./components/flight-container";
// import Row from "react-bootstrap/Row";
//
//
// export default class Results extends Component {
//     constructor(props) {
//         super(props)
//         this.data = props.data
//
//         this.state = {
//             data: {}
//         }
//     }
//
//     render() {
//         return (
//             <div>
//                 {(Object.keys(this.state.data).length > 0) ? Object.keys(this.state.data).map(key => (
//                     <div>
//                         <Row>
//                             <FlightContainer
//                                 key={key}
//                                 airline={this.state.data[key].airline}
//                                 currentLocation={this.state.data[key].start}
//                                 destination={this.state.data[key].end}
//                                 type="One Way"
//                                 time={this.state.data[key].time.replace("?", "-")}
//                                 duration={this.state.data[key].duration}
//                                 price={"$"+this.state.data[key].price}
//                                 score={this.state.data[key].score+"%"}/>
//                         </Row>
//                     </div>
//                 )): <div>results ...</div>}
//             </div>
//         )
//     }
//
// }
