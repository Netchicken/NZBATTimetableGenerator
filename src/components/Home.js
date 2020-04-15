import React from "react";
import Table2 from "./Table2";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  loadAssessmentsFile,
  GenerateHolidayDates,
  GetHolidayData
} from "../components/Dates";
var startdate2 = new Date();
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
  }

  // GenerateHolidayDates().map(item => {
  //   console.log(item);
  // });

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
          <h3>Course Start Date: {this.state.startDate.toDateString()}</h3>
        </span>
        <Table2 startDate={this.state.startDate.toDateString()}></Table2>
        <h3>Holiday Dates</h3>
        {GetHolidayData().map((item, index) => {
          return (
            <ul className="list-group list-group-flush">
              <li key={item.name}>
                {item.name} {item.startDate}
              </li>
            </ul>
          );
        })}
        <h3>Each Holiday Dates</h3>
        {GenerateHolidayDates().map((item, index) => {
          return (
            <ul className="list-group list-group-flush">
              <li>
                {item.daysbreak.length} Days - {item.name} <br></br>-{" "}
                {item.daysbreak}
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default Home;
