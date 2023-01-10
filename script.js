"use strict";

//the data object
const csvData = [
["PID", "Name", "Sex", "DOB", "Location", "", "", "", "", "", "SID", "Collection", "Type", "Priority", "Physician", "Connection","", "", "", "", "Test", "Test", "Test", "Test", "Test", "Test", "Test", "Test", "Test", "Test", "Test", "Test", "Test", "Test", "Test", "Test", "Test", "Test", "Test", "Test", ],
["L1-P1","JohnDoe1","M","19720807","CJ","","","","","","","","","","DrBob","","","","","","","","","","","","","","","","","","","","","","","","",""]
]


//function that will take the user input of SID and LIS name and add them to the empty object elements
let sid = "";
let lis = "";
function generateSidLis(ev) {
  ev.preventDefault(); //stop the form submitting

  let sidValue = document.getElementById("sid").value;
  sid = sidValue;

  let lisValue = document.getElementById("lis").value;
  lis = lisValue;

  document.forms[0].reset(); // clear the form for the next entry
  csvData[1][10] = sid;
  csvData[1][20] = lis;
  console.log(csvData);
}


// the csv maker function
const csvmaker = function (csvData) {
    let csvRows = []; // empty array for storing data
    const headers = csvData[0];
    csvRows.push(headers.join(",")); // separating headers with comma and pushing into the array
    const values = csvData[1].join(",");
    csvRows.push(values); // pushing object values into the array with comma separation
  
    return csvRows.join("\n"); // return the array joining with new line
  };

//the download function

const download = function (csvRows) {
    const blob = new Blob([csvRows], { type: "text/csv" }); // a Blob is a chunk of data / a small text file representation)
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("download", "download.csv");
    a.click();
  };


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnAdd").addEventListener("click", generateSidLis);
  const get = async function () {
    const data = csvData;
    const csvdata = csvmaker(data);
    download(csvdata);
  };
  document.getElementById("btnGenerate").addEventListener("click", get);
});
