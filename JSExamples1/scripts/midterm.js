function validateForm() {
    
    

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;
    var fullname = document.getElementById("fullname").value;

    if (username == null || username == "") {
        alert("Username must be filled out");
        return false;
    }
    if (password == null || password == "") {
        alert("Password must be filled out");
        return false;
    }
    if (password.length <6) {
        alert("Minimum 6 characters required for password");
        return false;
    }
    if (repassword == null || repassword == "") {
        alert("Re-enter password must be filled out");
        return false;
    }
    
    if (repassword !== password) {
        alert("Passwords must match");
        return false;
    }
    if (fullname == null || fullname == "") {
        alert("Full name must be filled out");
        return false;
    }


    return true;
}