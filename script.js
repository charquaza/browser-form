var form = document.querySelector("form");
var submitBtn = document.querySelector("button[type='submit']");

submitBtn.addEventListener("click", function checkPassword(event) {
    var password = document.getElementById("password");
    var passwordConfirm = document.getElementById("password-confirm");

    if (password.value !== passwordConfirm.value) {
        passwordConfirm.setCustomValidity("Passwords must match!");
        form.reportValidity();
    } else {
        passwordConfirm.setCustomValidity("");
    }
});