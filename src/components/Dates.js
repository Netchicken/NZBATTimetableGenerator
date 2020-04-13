import assessemnts from "../Assets/Assessments.json";

export default async function test() {
  const data = await assessemnts;
  const dateStart = new date();

  data.map((data, i) => {
    console.info(data.DueDate);
    data.DueDate = data.dateStart + data.days;
  });

  return data; //JSON.parse(dict);
}

//todo ad weeks from start to each entry
