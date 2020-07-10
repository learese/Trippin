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

export const deleteLocation = (id) => {
    return {
        type: 'DEL_LOCATION',
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

export const changeView = (country,city,locations) => {
    let view = {
        byID: {
            country: country.id,
            city: city.id,
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