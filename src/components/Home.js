import React from "react";
import Table2 from "./Table2";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
var startdate2 = new Date();
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
  }

  handleCalendarClose = () => {
    console.log("Calendar closed", startdate2);
  };

  handleCalendarOpen = () => console.log("Calendar opened");

  handleChange = date => {
    // startdate2 = date.toDateString();
    console.log("startdate handlechange ", startdate2);

    this.setState(
      () => ({
        startDate: date
      }),
      () => {}
    );
  };

  render() {
    return (
      <div>
        <h1>NZBat Assessment Dates</h1>
        <span>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            withPortal
            peekNextMonth
            showYearDropdown
            showMonthDropdown
            dropdownMode="select"
            onCalendarClose={this.handleCalendarClose}
            onCalendarOpen={this.handleCalendarOpen}
            dateFormat="dd/MM/yyy"
          />
          Course Start Date: {this.state.startDate.toDateString()}
        </span>

        <Table2 startDate={this.state.startDate.toDateString()}></Table2>
      </div>
    );
  }
}

export default Home;
