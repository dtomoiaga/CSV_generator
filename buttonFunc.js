// the Add button is enabled only when both fields have data
function enableAddBtn() {
  if (
    document.getElementById("sid").value !== "" &&
    document.getElementById("lis").value !== ""
  ) {
    document.getElementById("btnAdd").disabled = false;
  } else {
    document.getElementById("btnAdd").disabled = true;
  }
}

// the Generate CSV button is enabled only after the Add button is clicked
function enableGenerateBtn() {
  document.getElementById("btnGenerate").disabled = false;
}

// disable again the Add button after it was clicked

function disableAddBtn() {
  document.getElementById("btnAdd").disabled = true;
}
