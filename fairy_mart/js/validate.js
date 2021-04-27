function validateLoginForm() {
    var email = document.forms["loginForm"]["idemail"].value;
    var pass = document.forms["loginForm"]["idpass"].value;
    if ((email == "") || (pass == "")) {
        alert("Please Fill Out Your Email / Password !");
        return false;
    }
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email))) {
        alert("Please Correct Your Email !");
        return false;
    }
}

function validateRegForm() {
    var name = document.forms["registerForm"]["idname"].value;
    var email = document.forms["registerForm"]["idemail"].value;
    var phone = document.forms["registerForm"]["idphone"].value;
    var gender = document.forms["registerForm"]["idgender"].value;
    var pass = document.forms["registerForm"]["idpass"].value;
    var passb = document.forms["registerForm"]["idpassb"].value;

    if ((name == "") || (email == "") || (phone == "") || (gender == "") || (pass == "") || (passb == "")) {
        alert("Please Fill in All Required Fields !!!");
        return false;
    }

    else if ((pass != passb)) {
        alert("Password is Not Matched with Re-enter Password !");
        return false;
    }


    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email))) {
        alert("Please Correct Your Email !");
        return false;
    }
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phone.match(phoneno)) {
        return true;
    }
    else {
        alert("It's Not a valid Phone Number !");
        return false;
    }
}