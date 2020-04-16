import assessemnts from "../Assets/Assessments.json";
import collegeHolidays from "../Assets/Holidays.json";
import moment from "moment";
//https://www.sitepoint.com/managing-dates-times-using-moment-js/

export function loadAssessmentsFile(startDate) {
  const data = assessemnts; //load from file

  console.log("date.js dateStart in", startDate);
  var date = new Date(startDate); //convert string to date

  var allHolidays = GenerateHolidayDates();

  //loop through each entry and calculate dates adding days to assessment
  //moment(date, "DD-MM-YY") this is only parsing date, not formatting date
  const AssWithDates = data.map(item => {
    var newdate = new Date(moment(date, "DD-MM-YY").add(item.days, "d"));
    newdate = moment(newdate).format("DD-MM-YY");

    //compare holiday dates with assessment dates
    allHolidays.map(item => {
      console.log("date match assess date ", newdate);
      // console.log("date match holiday date ", item.daysbreak);
      //if the day is in the holiday dates
      if (item.daysbreak.includes(newdate)) {
        // make the duedate the last day of the holiday and count the date difference to add to the folling dates
        newdate = new Date(
          moment(item.daysbreak[item.daysbreak.length - 1]).format("DD-MM-YY")
        );
        console.log("date match ", "true " + newdate);
        //    newdate.add(item.days,"d"); //add in the holidays
      }
      console.log("date match ", "false");
    });

    item.DueDate = moment(newdate).format("MMM Do"); //format date for viewing
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
    var holidayStartDate = new Date(moment(item.startDate, "DD-MM-YY")); //turn the date string to a date
    //loop through the days and add 1
    var i = 1;
    for (i = 0; i < item.days; i++) {
      var singledate = new Date(
        moment(holidayStartDate, "DD-MM-YY").add(i, "d")
      );
      //holidayStartDate.setDate(holidayStartDate.getDate() + i)
      //);

      var dateFinal = moment(singledate).format("DD-MM-YY");

      item.daysbreak.push(dateFinal); //add dates to the array

      // console.log(
      //   item.name + " day count " + item.daysbreak.length,
      //   item.daysbreak.toString()
      // );
    }
    return item;
  });
  return allHolidays;
  //
}
