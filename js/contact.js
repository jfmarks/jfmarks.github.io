emailjs.init('-bb8RCJ4HP6XEY_lW');


document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission behavior
      
      var user_fname = document.querySelector("#user_fname").value;
      var user_lname = document.querySelector("#user_lname").value;
      var user_email = document.querySelector("#user_email").value;
      var user_phone = document.querySelector("#user_phone").value;
      var user_message = document.querySelector("#user_message").value;
      
      if (ValidatePhone(user_phone) && validateEmailAddress(user_email)) {
        document.getElementById("phone_error").style.display = "none";
        document.getElementById("email_error").style.display = "none";
        document.getElementById("success").style.display = "block";
        console.log("success");
        var SUCCESS = true;
      } else {
        if (validateEmailAddress(user_email) == false) {
          document.getElementById("email_error").style.display = "block";
        } else {
          document.getElementById("email_error").style.display = "none";
        }
        if (ValidatePhone(user_phone) == false) {
          document.getElementById("phone_error").style.display = "block";
        } else {
          document.getElementById("phone_error").style.display = "none";
        }
        var SUCCESS = false;
      }
      console.log(SUCCESS);
      if (SUCCESS) {
        emailjs.send("Gmail_contact_service","template_zbd123d",{
          user_fname: user_fname,
          message: user_message,
          user_email: user_email,
          user_phone: user_phone,
          user_lname: user_lname,
          });
      }
    });
  });
function validateEmailAddress(emailAddress) {
  var domainPattern = /^[a-zA-Z0-9.-]+(\.[a-zA-Z]{2,})+$/;
  var atSymbol = emailAddress.indexOf("@");
  var dotSymbol = emailAddress.lastIndexOf(".");
  var domain = emailAddress.substring(atSymbol + 1, emailAddress.length);
  //var TLD = emailAddress.substring(dotSymbol + 1, emailAddress.length);
  var validDomain = domainPattern.test(domain);
  console.log(domain + " " + toString(validDomain));

    if ((atSymbol != -1) &&
        (atSymbol != 0) &&
        (dotSymbol != -1) &&
        (dotSymbol != 0) &&
        validDomain &&
        (dotSymbol > atSymbol + 1) &&
        (emailAddress.length > dotSymbol + 1) ) {
        return true;
    } else {
        return false;
    }
}
function ValidatePhone(input) {
    if ((input[3] == "-" && input[7] == "-") &&
        (input.length == 12) &&
        /^\d{3}[-]\d{3}[-]\d{4}$/.test(input)
        ) {
            return true;
    } else {
        return false;
    }
}
