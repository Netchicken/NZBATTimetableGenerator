import React from "react";
import Table2 from "./Table2";
import "../App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  loadAssessmentsFile,
  GenerateHolidayDates,
  GetHolidayData,
} from "../components/Dates";

import Toggle from "react-toggle";
import "react-toggle/style.css";

var startdate2 = new Date();

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      ShowHolidays: false,
      CalculateHolidays: false,
    };
  }

  handleCalendarClose = () => {
    console.log("Calendar closed", startdate2);
  };

  handleCalendarOpen = () => console.log("Calendar opened");

  ShowHolidaysChange = (event) => {
    this.setState(() => ({
      ShowHolidays: !this.state.ShowHolidays,
    }));
    console.log("ShowHolidays ", this.state.ShowHolidays);
  };

  CalculateHolidaysChange = (event) => {
    this.setState(() => ({
      CalculateHolidays: !this.state.CalculateHolidays,
    }));
    console.log("CalculateHolidays ", this.state.CalculateHolidays);
  };

  handleChange = (date) => {
    // startdate2 = date.toDateString();
    console.log("startdate handlechange ", startdate2);

    this.setState(
      () => ({
        startDate: date,
      }),
      () => {}
    );
  };

  render() {
    return (
      <div className="container">
        <h1>NZBat Assessment Dates</h1>
        <Toggle
          // id="cheese-status"
          defaultChecked={this.state.ShowHolidays}
          onChange={this.ShowHolidaysChange}
        />
        <label htmlFor="cheese-status">Show Holidays</label>

        <Toggle
          //  id="cheese-status"
          defaultChecked={this.state.CalculateHolidays}
          onChange={this.CalculateHolidaysChange}
        />
        <label htmlFor="cheese-status">Calculate Holidays</label>
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
        <Table2
          startDate={this.state.startDate.toDateString()}
          ShowHolidays={this.state.ShowHolidays}
          CalculateHolidays={this.state.CalculateHolidays}></Table2>

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
