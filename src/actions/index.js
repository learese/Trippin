export const addMsg = msg => {
    return {
        type: 'ADD_MSG',
        addMsg: msg
    };
};

export const selectMsg = msgId => {
    return {
        type: 'SELECT_MSG',
        selectMsg: msgId
    }
};

export const deleteMsg = msgId => {
    return {
        type: 'DELETE_MSG',
        deleteMsg: msgId
    }
};

export const chooseUser = userName => {
    return {
        type: 'CHOOSE_USER',
        chooseUser: userName
    }
};

export const logOut = () => {
    return {
        type: 'LOGOUT'
    }
};

export const logIn = nameEmailObj => {
    return {
        type: 'LOGIN',
        logIn: nameEmailObj
    }
}

export const deleteLocation = (id) => {
    return {
        type: 'DEL_LOCATION',
        location_id: id,
    };
};
export const deleteCity = (id) => {
    return {
        type: 'DEL_CITY',
        location_id: id,
    };
};
export const deleteCountry = (id) => {
    return {
        type: 'DEL_COUNTRY',
        location_id: id,
    };
};

export const addLocation = (id,name,address,cityID) => {
    return {
        type: 'NEW_LOCATION',
        location_id: id,
        location_name: name,
        location_address: address,
        cityID: cityID,
    };
};


export const renderLocation = (locations) => {
    return{
        type: "RENDER_LOCATION",
        payload: locations
    }
}
export const renderCountry = (locations) => {
    return{
        type: "RENDER_COUNTRY",
        payload: locations
    }
}
export const renderCity = (locations) => {
    return{
        type: "RENDER_CITY",
        payload: locations
    }
}
export const startDateChange = (place,type,date,dateIndex,) => {
    if (type === 'city'){
        return{
            type: "START_DATE_CHANGE_CITY",
            place: place,
            date: date,
            dateIndex: dateIndex,
        }
    }
    else if (type ==='country'){
        return{
            type: "START_DATE_CHANGE_COUNTRY",
            place: place,
            date: date,
            dateIndex: dateIndex,
        }
    }
    else if (type ==='itinerary'){
        return{
            type: "START_DATE_CHANGE_ITINERARY",
            date: date,
            dateIndex: dateIndex,
        }
    }
    return {}
};

export const endDateChange = (place,type,date,dateIndex,) => {
    if (type === 'city'){
        return{
            type: "END_DATE_CHANGE_CITY",
            place: place,
            date: date,
            dateIndex: dateIndex,
        }
    }
    else if (type ==='country'){
        return{
            type: "END_DATE_CHANGE_COUNTRY",
            place: place,
            date: date,
            dateIndex: dateIndex,
        }
    }
    else if (type ==='itinerary'){
        return{
            type: "END_DATE_CHANGE_ITINERARY",
            date: date,
            dateIndex: dateIndex,
        }
    }
    return {}
};
export const deleteDate = (place,type,dateIndex) => {
    if (type === 'city'){
        return{
            type: "DELETE_DATE_CITY",
            place: place,
            dateIndex: dateIndex,
        }
    }
    else if (type ==='country'){
        return{
            type: "DELETE_DATE_COUNTRY",
            place: place,
            dateIndex: dateIndex,
        }
    }
    else if (type ==='itinerary'){
        return{
            type: "DELETE_DATE_ITINERARY",
            place: place,
            dateIndex: dateIndex,
        }
    }
    return {}
};
export const addNewDate = (place,type,start,end) => {
    if (type === 'city'){
        return{
            type: "NEW_DATE_CITY",
            place: place,
            start: start,
            end: end,
        }
    }
    else if (type ==='country'){
        return{
            type: "NEW_DATE_COUNTRY",
            place: place,
            start: start,
            end: end,
        }
    }
    else if (type ==='itinerary'){
        return{
            type: "NEW_DATE_ITINERARY",
            place: place,
            start: start,
            end: end,
        }
    }
    return {}
};

export const changeView = (id) => {
    let view = {
        byID: {
            city: id,
        }
    };
    return {
        type: 'CHANGE_VIEW',
        newView: view,
    };
};

export const itineraryNameChange = (name) => {
    return {
        type: 'NAME_CHANGE',
        name: name,
    };
};

export const saveItinerary= (itinerary) => {
    return {
        type: 'SAVE_ITINERARY',
        payload: itinerary
    }
}

export const getCurrentItineraryID = (id) => {
    return {
        type: "GET_CURRENT_ITINERARY_ID",
        payload: id
    }
}

export const insertNewCountry = (id, name) => {
    return{
        type: "NEW_COUNTRY",
        id: id,
        name: name,
    }
}
export const insertNewCity = (id, name,countryID) => {
    return{
        type: "NEW_CITY",
        id: id,
        name: name,
        countryID: countryID,
    }
}
export const setItineraryFromDB = (itinerary) => {
    return{
        type: "SET_ITINERARY",
        payload:itinerary,
    }
}
