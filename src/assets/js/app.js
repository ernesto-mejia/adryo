
function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
        $('#eye_').removeClass('fal fa-eye');
        $('#eye_').addClass('fal fa-eye-slash');
    } else {
        x.type = "password";
        $('#eye_').removeClass('fal fa-eye-slash');
        $('#eye_').addClass('fal fa-eye');
    }
}


