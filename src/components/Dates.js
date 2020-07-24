import React from "react";
import {connect} from 'react-redux';
import Popup from "reactjs-popup";
import { MuiPickersUtilsProvider,DatePicker  } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import format from 'date-fns/format'
import {startDateChange,endDateChange} from "../actions";
import DateRangeIcon from '@material-ui/icons/DateRange';
import IconButton from "@material-ui/core/IconButton";
import './Dates.css';
import { green } from '@material-ui/core/colors';


class Dates extends React.Component{

    renderDatesPopup(){
        let dates = []
        dates.push(<h1>{this.props.place.name} dates</h1>)
        this.props.place.dateRanges.forEach((item,index) => {
            dates.push(
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <ul>
                        <li>
                            Date #{index+1}
                            <div className={"DatePicker"}>
                                <DatePicker
                                    label={"Start Date"}
                                    value={new Date(item.start)}
                                    onChange={(date)=>{this.handleChangeStartDate(date,index)}}
                                    animateYearScrolling                                    />
                            </div>
                            <div className={"DatePicker"}>
                                <DatePicker
                                    label={"End Date"}
                                    value={new Date(item.end)}
                                    onChange={(date)=>{this.handleChangeEndDate(date,index)}}
                                    animateYearScrolling
                                />
                            </div>
                        </li>
                    </ul>
                </MuiPickersUtilsProvider>
            )
        });
        return dates;
    }
    render() {
        let datesComponent =(
            <div className={"datesDiv"}>
                <ul className={"zeroPad zeroMarg displayInline"}>
                {this.props.place.dateRanges.map((date,index) => (
                    <li key={index}>{date.start + " - " + date.end}</li>
                ))}
            </ul>
                <div className={"buttonCalendar"}>
                    <IconButton  aria-label="Edit" name="Edit" >
                        <DateRangeIcon className={"edit-btn"} style={{ color: green[500] }}/>
                    </IconButton>
                </div>
            </div>
        );

        return(
            <div className={this.props.class+ ""}>

                <Popup contentStyle={{width: "600px"}}trigger={datesComponent} modal>
                    {close => (
                        <div className="modal" style={{color: "black"}}>
                            <a className="close" onClick={close}>
                                &times;
                            </a>
                            {this.renderDatesPopup()}
                        </div>
                    )}
                </Popup>
            </div>

        );
    }
    handleChangeStartDate = (date,index) => {
        console.log("CHANGING START DATE: " + format(date, 'yyyy/MM/dd'));
        let dateString = format(date, 'yyyy/MM/dd');
        this.props.startDateChange(this.props.place,this.props.type,dateString,index)
    };
    handleChangeEndDate = (date,index) => {
        console.log("CHANGING END DATE: " + format(date, 'yyyy/MM/dd'));
        let dateString = format(date, 'yyyy/MM/dd');
        this.props.endDateChange(this.props.place,this.props.type,dateString,index)
    };
}

const mapStateToProps = (state) =>{
    return {
        locations: state.locations,
        currentView: state.currentView,
        cities: state.cities,
        countries: state.countries,
        itinerary: state.itinerary,
    };
};

export default connect(mapStateToProps,{startDateChange,endDateChange})(Dates);