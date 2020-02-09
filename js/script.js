//generate random password
function generate(x){

    //set password length/complexity
    let complexity = document.getElementById("slider").value;

    //possible password values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    //create for loop to choose password characters
    for(var i = -1; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br />";

    //slider value = character length is compared and output to password strength

    var x = document.getElementById("slider").value;
    
    if (x > 0 && x <= 9){
       document.querySelector(".passwordtextbox").style.backgroundColor = "#cc3300";
       document.getElementById("passwordM").innerHTML = "Password strength: Weak";
       document.getElementById("passwordB").innerHTML = "Character length: " + (x);
      
    } else if (x >= 10 && x <= 15) {
        document.querySelector(".passwordtextbox").style.backgroundColor = "#ffcc00"; 
        document.getElementById("passwordM").innerHTML = "Password strength: Moderate";
        document.getElementById("passwordB").innerHTML = "Character length: " + (x);
    } else if (x >= 16 && x <= 25){
        document.querySelector(".passwordtextbox").style.backgroundColor = "#99cc33";
        document.getElementById("passwordM").innerHTML = "Password strength: Strong";
        document.getElementById("passwordB").innerHTML = "Character length " + (x);
    }

}

//set default length display of 25
document.getElementById("length").innerHTML = "Length: 25";

//function to set length based on slider position
document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }

}