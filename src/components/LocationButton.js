import {addLocation, insertNewCity, insertNewCountry} from "../actions";
import React from "react";
import {connect} from "react-redux";
const { uuid } = require('uuidv4');

class LocationButton extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <button className={"addLocationButton"} onClick={this.addLocationToItinerary.bind(this)}>Add Location</button>
        )
    }
    addLocationToItinerary() {
        let currentMapLocation = this.props.mapLocation;

        let city = currentMapLocation.Area;
        let address = currentMapLocation.Address;
        let country = currentMapLocation.Country;
        let location = currentMapLocation.Name;

        if(this.props.countries.map(item => item.name).includes(country)){
            if(this.props.cities.map(item => item.name).includes(city)){
                //Country and City exist in itinerary
                let cityID = this.props.cities.filter((item) => {return item.name == city})[0].id;
                console.log(cityID);
                if(!this.props.locations.map(item => item.location).includes(location)){
                    let locationID = uuid();
                    this.props.addLocation(locationID,location,address,cityID);
                }
            }
            //New city to add
            else{
                let countryID = this.props.countries.filter((item) => {return item.name == country})[0].id;
                let cityID = uuid();
                //New City to add
                if (city !== ""){
                    this.props.insertNewCity(cityID,city,countryID)
                    //New Location to add
                    if (city !== location){
                        let locationID = uuid();
                        this.props.addLocation(locationID,location,address,cityID);
                    }
                }
            }
        }
        else{
            //New Country to add
            let countryID = uuid();
            let cityID = uuid();
            //New City to add
            if (city !== ""){
                this.props.insertNewCity(cityID,city,countryID)
                //New Location to add
                if (city !== location){
                    let locationID = uuid();
                    this.props.addLocation(locationID,location,address,cityID);
                }
            }
            this.props.insertNewCountry(countryID,country);

        }
    }
}

const mapStateToProps = (state) =>{
    return {
        mapLocation: state.mapLocation,
        cities: state.cities,
        countries: state.countries,
        locations: state.locations,
    };
};

export default connect(mapStateToProps,{addLocation,insertNewCountry,insertNewCity})(LocationButton);