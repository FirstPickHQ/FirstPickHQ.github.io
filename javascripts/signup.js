document.addEventListener("DOMContentLoaded", function() {
  var scriptURL =
    "https://script.google.com/macros/s/AKfycbxMKEYla03wm-sS6mPf60AhwAo_UQVAcyswgX9qn8Na_zm3r8s/exec";
  var form = document.forms["submit-to-google-sheet"];

  form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then(response => console.log("Success!", response))
      .catch(error => console.error("Error!", error.message));
  });
});

document.addEventListener("DOMContentLoaded", function() {
  document.addEventListener("keyup", function(event) {
    var fullName = document.getElementById("fullName").value;
    var orgName = document.getElementById("organisationName").value;
    var email = document.getElementById("email").value;

    if (fullName != "" && orgName != "" && email != "") {
      if (email.includes("@") && email.includes(".")) {
        document.getElementById("register").disabled = false;
        return;
      }
    }
    document.getElementById("register").disabled = true;
  });
});
