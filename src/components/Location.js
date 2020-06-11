import React from "react";
import './Iteneraries.css';
import Notes from "./Notes";
import {connect} from "react-redux";
import {deleteLocation} from "../actions";

class Location extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            note: new Notes()
        };
    }
    render() {
        return(
            <div>
                <label className={"location"}>{this.props.name} </label>
                <label className={"address"}> {this.props.address}</label>
                <div className={"buttonDiv"}>
                    <button className={"btn"}>Edit</button>
                    <button className={"btn"} onClick={() => this.props.deleteLocation(this.props.idx)}>Delete</button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        locations: state.locations,
    };
};

export default connect(mapStateToProps, {deleteLocation})(Location);

// const muiStyles = {
//     bg: {
//         position: "absolute",
//         backgroundImage: `url(${require("../assets/vancouver.jpg")})`,
//         backgroundSize: "cover",
//         height: "100vh",
//         width: "100vw",
//         top: "0",
//         left: "0",
//         color: "#000000",
//         fontSize: "30px"
//     }
// }

// export default withStyles(muiStyles)(Location);