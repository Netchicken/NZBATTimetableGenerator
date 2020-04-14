import assessemnts from "../Assets/Assessments.json";

//data.days shows days from the LAST assessment, ie: 2 weeks later  = 14

export default function loadAssessmentsFile(dateStart) {
  const data = assessemnts;
  console.log("AFile dateStart in", dateStart);
  var date = new Date(dateStart);

  //const date = dateStart;
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  data.map((data, i) => {
    //  console.log("in", data.DueDate + " " + data.days);
    var newdate = new Date(date.setDate(date.getDate() + data.days));
    data.DueDate = newdate.toLocaleDateString(undefined, options);
    console.log("out", data.DueDate);
  });

  return data;
}
