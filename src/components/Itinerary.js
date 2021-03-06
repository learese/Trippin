import React from "react";
import { connect } from 'react-redux';
import { changeView, renderLocation, getCurrentItineraryID,saveItinerary} from '../actions';
import './Itinerary.css';
import './Iteneraries.css';
import Collapsible from "react-collapsible";
import City from "./City";
import Map from "./Map";
import SaveButton from "./SaveButton";
//import LocationButton from "./LocationButton";
import Dates from "./Dates";
import axios from "axios";


class Itinerary extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        };
    }

    componentDidMount(){
        axios.get("http://localhost:9000/itinerary/")
            .then(response => {
            if(response.data.length > 0){
                this.props.renderLocation(response.data[0].locations);
                this.props.getCurrentItineraryID(response.data[0]._id);
                this.props.saveItinerary({id: response.data[0].id});
            } else {
                this.props.renderLocation([]);
            }
        })
            .catch(err => console.log("Err" + err));
        console.log("GOT HERE!!!!");
    }


    renderItinerary() {
        const content = [];
        const locations = this.props.locations;
        for (const country of this.props.countries) {
            content.push(
                <Collapsible className="" key={country.name} trigger={
                    <div>
                        <h1>{country.name}</h1>
                        <Dates place={country} class={"dates"} type={"country"}/>
                    </div>
                }>

                {this.props.cities.filter(function(city){
                    return city.countryID == country.id;
                }).map(function(city,index){
                    return (<div key={index} className="stripe item-font" onClick={() => this.props.changeView(country,city)}>{city.name}</div>)
                },this)
                }
            </Collapsible>
            )
        }
        return content;
    }

    render() {
        return (
            <React.Fragment>
                <h1>{this.props.itinerary.name}</h1>
                <City />
            
                <SaveButton />
            </React.Fragment>
        )
    }

}

//state has entire state of app!!
const mapStateToProps = (state) => { //name is by convention
    return {
        lists: state.lists,
        msgId: state.msgId,
        countries: state.countries,
        cities: state.cities,
        itinerary: state.itinerary,
        locations: state.locations,
    }; //now it will appear as props
};


export default connect(mapStateToProps, {changeView, renderLocation, getCurrentItineraryID,saveItinerary})(Itinerary);
