function validate(){
    // check for empty-fields
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var url = document.getElementById("url").value;
    var aboutMe = document.getElementById("about_me").value;

    var error_msg = "";

    if(username == null || username.trim() == ""){
        error_msg += "Username can't be empty. <br/>";
    }

    if(aboutMe == null || aboutMe.trim() == ""){
        error_msg += "About me can't be empty. <br/>";
    }

    if(validateEmail(email) == false){
        error_msg += "Enter a valid email. <br/>";
    }
    
    if(validateUrl(url) == false){
        error_msg += "Enter a valid url. <br/>";
    }

    document.getElementById("error_div").innerHTML = error_msg;
}

function validateEmail(email){
    emailRegex = /^[a-zA-Z0-9]+@[a-z]+\.(com)|(in)$/i;
    if(email.search(emailRegex) == -1){
        return false;
    }
    else{
        return true;
    }
}

function validateUrl(url){
    urlRegex = /^(http:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9]+\.[a-zA-Z]+$/;
    if(url.search(urlRegex) == -1){
        return false;
    }
    else{
        return true;
    }
}