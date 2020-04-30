import React from "react";
import Table2 from "./Table2";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css";
import DatePicker from "react-datepicker";

import {
  loadAssessmentsFile,
  GenerateHolidayDates,
  GetHolidayData,
} from "../components/Dates";
import moment from "moment";
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
    console.log("Home.js CalculateHolidays ", this.state.CalculateHolidays);
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

  // ExampleCustomInput = ({ value, onClick }) => (
  //   <button className="datepickerFrontButton" onClick={onClick}>
  //     {value}
  //   </button>
  // );

  render() {
    return (
      <div className="container">
        <header className="header">
          <div className="title">
            <h1>NZBat Assessment Dates</h1>
          </div>
        </header>

        {/* <Toggle

          defaultChecked={this.state.ShowHolidays}
          onChange={this.ShowHolidaysChange}
        />
        <label htmlFor="cheese-status">Show Holidays</label> */}
        <div className="containerSub">
          Select Your Start Date
          <DatePicker
            todayButton="Today"
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
            // customInput={this.ExampleCustomInput}
          />
          <Toggle
            defaultChecked={this.state.CalculateHolidays}
            onChange={this.CalculateHolidaysChange}
          />
          <label htmlFor="cheese-status">Calculate effect of Holidays</label>
          <h3>
            Course Start Date:
            {moment(this.state.startDate).format("dddd, MMMM Do YYYY")}
          </h3>
        </div>

        <Table2
          startDate={this.state.startDate.toDateString()}
          ShowHolidays={this.state.ShowHolidays}
          CalculateHolidays={this.state.CalculateHolidays}
        ></Table2>

        <h3>Holiday Dates</h3>

        {GetHolidayData().map((item, index) => {
          return (
            <ul className="list-group list-group-flush">
              <li key={item.name}>
                {item.name}{" "}
                {moment(item.startDate, "DD-MM-YY").format(
                  "dddd, MMMM Do YYYY"
                )}
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
