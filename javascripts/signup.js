function validateForm() {
  var fullName = document.getElementById("fullName").value;
  var orgName = document.getElementById("organisationName").value;
  var email = document.getElementById("email").value;

  if (fullName != "" && orgName != "" && email != "") {
    if (email.includes("@") && email.includes(".")) {
      submitFormData();
      //window.location.href = "https://firstpick.io/";
    }
  }
  if (email == "" || !email.includes("@") || !email.includes(".")) {
    document.getElementById("emailError").style.display = "block";
  } else {
    document.getElementById("emailError").style.display = "none";
  }
  if (fullName == "") {
    document.getElementById("fullNameError").style.display = "block";
  } else {
    document.getElementById("fullNameError").style.display = "none";
  }
  if (orgName == "") {
    document.getElementById("orgNameError").style.display = "block";
  } else {
    document.getElementById("orgNameError").style.display = "none";
  }
  return false;
}

function submitFormData() {
  var scriptURL =
    "https://script.google.com/macros/s/AKfycbxMKEYla03wm-sS6mPf60AhwAo_UQVAcyswgX9qn8Na_zm3r8s/exec";
  var form = document.forms["submit-to-google-sheet"];

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(response => console.log("Success!", response))
    .catch(error => console.error("Error!", error.message));
}
