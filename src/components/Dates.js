import assessemnts from "../Assets/Assessments.json";
import collegeHolidays from "../Assets/Holidays.json";
import moment from "moment";
//https://www.sitepoint.com/managing-dates-times-using-moment-js/

export function loadAssessmentsFile(startDate) {
  const data = assessemnts; //load from file

  console.log("date.js dateStart in", startDate);
  var date = new Date(startDate); //convert string to date

  //loop through each entry and calculate dates adding days to assessment
  const AssWithDates = data.map(item => {
    var newdate = new Date(moment(date, "DD-MM-YY").add(item.days, "d")); //date.setDate(date.getDate() + item.days));
    item.DueDate = moment(newdate).format("dddd, MMMM Do"); //format date for viewing
    console.log("out", item.DueDate);
    return item;
  });

  return AssWithDates;
}

export function GetHolidayData() {
  const holidays = collegeHolidays;

  return holidays;
}

export function GenerateHolidayDates() {
  const holidays = collegeHolidays;

  //push all the days that are a break to daysbreak array
  const allHolidays = holidays.map(item => {
    var holidayStartDate = new Date(moment(item.startDate, "DD-MM-YYYY")); //turn the date string to a date
    //loop through the days and add 1
    var i = 1;
    for (i = 0; i < item.days; i++) {
      var singledate = new Date(
        moment(holidayStartDate, "DD-MM-YY").add(i, "d")
      );
      //holidayStartDate.setDate(holidayStartDate.getDate() + i)
      //);
      item.daysbreak.push(singledate.toDateString()); //add dates to the array

      console.log(
        item.name + " day count " + item.daysbreak.length,
        item.daysbreak.toString()
      );
    }
    return item;
  });
  return allHolidays;
  //
}
