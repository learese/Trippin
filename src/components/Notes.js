import React from "react";
import  {connect}  from 'react-redux';
import  {addNotes} from './../actions/addNotes'
import "./Notes.css"

class Notes extends React.Component {
    constructor(props){
        super(props);
        let newArray = this.props.location.slice();
        let indexOfLocation= newArray.findIndex((item) => {
            return this.props.id == item.id;
        });
        this.state = {
            currentLocation: this.props.location[indexOfLocation],
           notesText: this.props.location[indexOfLocation].notes,
           index: indexOfLocation
           // userImages image object will change when database added: {fileName:"name", fileLoc:"../imgs/name.jpg"}
        };
        this.handleNotesInput = this.handleNotesInput.bind(this);
    }

    handleNotesInput(event) {
        this.setState({
            currentLocation: this.state.currentLocation,
            notesText: event.target.value,
            index: this.state.index
        });
      }

    handleSaveNotes = () => {
        console.log(this.state.notesText);
        this.props.addNotes({
        notes: this.state.notesText,
        index: this.state.index
        });
    }



    render() {
        return(
            <div className="notes">
            <div className="notes-outer">
                <div className="notes-inner">
                    <textarea id="notes-text" value={this.state.notesText} onChange={this.handleNotesInput}>
                    </textarea>
                </div>
                <div id="notes-inner-button">
                    <button id="notes-button" value="notes-button"  type="button" onClick={this.handleSaveNotes}>
                        Save
                    </button>
                </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        currentLocation: state.currentLocation,
        locations: state.locations,
    }
}

export default connect(mapStateToProps, {addNotes})(Notes); 
