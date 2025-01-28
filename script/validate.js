function validate() {

    document.getElementById("errorFirst").innerHTML = "";
    document.getElementById("errorLast").innerHTML = "";
    document.getElementById("errorEmail").innerHTML = "";
    document.getElementById("errorPassword").innerHTML = "";
    document.getElementById("errorConfirm").innerHTML = "";


    let first = document.getElementById("first").value;
    let last = document.getElementById("last").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm_pass = document.getElementById("confirm").value;
    let validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (first.length < 3) {
        document.getElementById("errorFirst").innerHTML = "First name cannot be empty.";
        document.getElementById("first").focus();
        return false;
    }

    if (last.length < 1) {
        document.getElementById("errorLast").innerHTML = "Last name cannot be empty.";
        document.getElementById("last").focus();
        return false;
    }

    if (!validEmail.test(email)) {
        document.getElementById("errorEmail").innerHTML = "Please provide a valid email address.";
        document.getElementById("email").focus();
        return false;
    }

    if (password.length < 8) {
        document.getElementById("errorPassword").innerHTML = "Password must be at least 8 characters.";
        document.getElementById("password").focus();
        return false;
    }

    if (password !== confirm_pass) {
        document.getElementById("errorConfirm").innerHTML = "Passwords do not match.";
        document.getElementById("confirm").focus();
        return false;
    }

    return true;
}