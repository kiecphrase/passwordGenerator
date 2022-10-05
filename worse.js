function calc() {
    var lower = "qwertyuiopasdfghjklzxcvbnm";
    var upper = "MNBVCXZLKJHGFDSAPOIUYTREWQ";
    var numbs = "1234567890";
    var speci = "!@#$%^&*()?";
    var num = 0;
    var l = false;
    var u = false;
    var n = false;
    var s = false;
    var pass = "";

    for (let i = 0; i < 5; i++){
        num = Math.floor(4*Math.random());
        if(num == 0){
            pass = pass + lower.charAt(Math.floor(lower.length * Math.random()));
            l = true;
        }
        else if (num == 1){
            pass = pass + upper.charAt(Math.floor(upper.length * Math.random()));
            u = true;
        }
        else if (num == 2){
            pass = pass + numbs.charAt(Math.floor(numbs.length * Math.random()));
            n = true;
        }
        else {
            pass = pass + speci.charAt(Math.floor(speci.length * Math.random()));
            s = true;
        }

    }
    if(!l){
        pass = pass + lower.charAt(Math.floor(lower.length * Math.random()));
    }
    if(!u){
        pass = pass + upper.charAt(Math.floor(upper.length * Math.random()));
    }
    if(!n){
        pass = pass + numbs.charAt(Math.floor(numbs.length * Math.random()));
    }
    if(!s){
        pass = pass + speci.charAt(Math.floor(speci.length * Math.random()));
    }

    $("#password").text(pass);
}

function copyPassword(){
    var pass = document.getElementById("password");

    navigator.clipboard.writeText(pass.textContent);

    alert("Copied password: " + pass.textContent);
    
    console.log("Copied password: " + pass.textContent);
}

window.onload = function () {
    calc();
}

$("#new-pass").click(function () {
    calc();
})

$("#copy-pass").click(function () {
    copyPassword();
})