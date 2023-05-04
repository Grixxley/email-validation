var emailField = document.getElementById("email-field");
var emailLabel = document.getElementById("email-label");
var emailError = document.getElementById("email-error");

function validateEmail(){
    emailLabel.style.bottom = "45px"; //for it to move up//

    if (!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "please enter a vaild email";
        return false;
    }
        emailError.innerHTML = "";
        return true;
};

