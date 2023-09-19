function validateEmailAddress(emailAddress) {
    var atSymbol = emailAddress.indexOf("@");
    var dotSymbol = emailAddress.lastIndexOf(".");
    var spaceSymbol = emailAddress.indexOf(" ");

    if ((atSymbol != -1) &&
        (atSymbol != 0) &&
        (dotSymbol != -1) &&
        (dotSymbol != 0) &&
        // add the list of email domains here
        (dotSymbol > atSymbol + 1) &&
        (emailAddress.length > dotSymbol + 1) &&
        (spaceSymbol == -1)) {
        alert("Email address is valid.");
        return true;
    } else {
        alert("Email address is invalid.");
        return false;
    }
}
function ValidatePhone(input) {
    if ((input[3] == "-" && input[7] == "-") &&
        (input.length == 12) &&
        !(isNaN(parseInt(input.substring(0,3) + input.substring(4,7) + input.substring(8,12))))
        ) {
            return true;
    } else {
        return false;
    }
}