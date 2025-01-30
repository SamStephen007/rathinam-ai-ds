let eye = document.getElementById("eye");
let eye_confirm = document.getElementById("eye_confirm");
let password = document.getElementById("password");
let confirm = document.getElementById("confirm");
eye.onclick = function() {
    if (password.type == "password") {
        password.type = "text";
        eye.setAttribute("src", "./Assets/eye-key-look-password-security-see.svg")
    } else {
        password.type = "password";
        eye.setAttribute("src", "./Assets/eye-password-hide.svg");
    }
}
eye_confirm.onclick = function() {
    if (confirm.type == "password") {
        confirm.type = "text";
        eye_confirm.setAttribute("src", "./Assets/eye-key-look-password-security-see.svg")
    } else {
        confirm.type = "password";
        eye_confirm.setAttribute("src", "./Assets/eye-password-hide.svg");
    }
}