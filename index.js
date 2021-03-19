function random_function() {
    var a = document.getElementById("input").value;
    if (a === "INDIA") {
        var arr = ["Select State", "Maharashtra", "Delhi", "Andhra Pradesh", "Bihar"];
    }
    else if (a === "USA") {
        var arr = ["Select State", "Washington", "Texas", "New York"];
    }

    var string = "";

    for (i = 0; i < arr.length; i++) {
        string = string + "<option value=" + arr[i] + ">" + arr[i] + "</option>";
    }
    document.getElementById("output").innerHTML = string;
}



$(document).ready(function () {
    var a = Math.ceil(Math.random() * 9);
    var b = Math.ceil(Math.random() * 9);
    var captchDisplya = document.getElementById("captchaDisplay");
    var captcha = document.getElementById("captcha");
    captchDisplya.innerHTML = a + "+" + b + "=";
    check((a + b));


});

function check(add) {
    $("#captcha").change(function () {
        if ($("#captcha").val() == "") {
            alert("please enter the captcha");
        }
        if ($("#captcha").val() != add) {
            alert("wrong captcha");
            $("#captcha").val("");
        }

    })
}
// check the code the different browsers
$("#submit").click(function () {

    var count = 0;
    
    if ($("#fname").val() == "") {
        $("#fnameError").attr("hidden", false);
        count++;
    }
    else {
        $("#fnameError").attr("hidden", true);
    }
    
    if ($("#lname").val() == "") {
        $("#lnameError").attr("hidden", false);
        count++;
    }
    else {
        $("#lnameError").attr("hidden", true);
    }
    
    if ($("input[name='dob']").val()) {
        $("#dobError").attr("hidden", true);

    }
    else {
        $("#dobError").attr("hidden", false);
        count++;
    }
    
    if ($("input[name='gender']:checked").val()) {
        $("#genderError").attr("hidden", true);

    }
    else {
        $("#genderError").attr("hidden", false);
        count++;
    }
    
    if ($("#Address").val() == "") {
        $("#AddressError").attr("hidden", false);
        count++;
    }
    else {
        $("#AddressError").attr("hidden", true);
    }
    
    if ($("#city").val() == "") {
        $("#cityError").attr("hidden", false);
        count++;
    }
    else {
        $("#cityError").attr("hidden", true);
    }
    
    if ($("#mobile").val() == "") {
        $("#mobileError").attr("hidden", false);
        $("#mobileError").html("provide a number");
        count++;
    }
    else {
        if (($("#mobile").val() >= 999999999) && ($("#mobile").val() <= 9999999999)) {
            $("#mobileError").attr("hidden", true);
        }
        else {
            $("#mobileError").attr("hidden", false);
            $("#mobileError").html("provide a number with minimum length of 10");
            count++;
        }
    }
    
    if ($("#email").val() == "") {
        $("#emailError").attr("hidden", false);
        count++;
    }
    else {
        $("#emailError").attr("hidden", true);
    }
    
    if ($("#p1").val() == "") {
        if ($("#p2").val() == "") {
            $("#passwordError").attr("hidden", false);
            $("#passwordError").html("provide password and confirm your password");
            count++;
        }
        else {
            $("#passwordError").attr("hidden", false);
            $("#passwordError").html("provide password first");
            count++;
        }
    }
    else {
        if ($("#p2").val() == "") {
            $("#passwordError").attr("hidden", false);
            $("#passwordError").html(" retype to confirm your password");
            count++;
        }
        else {
            if ($("#p1").val() == $("#p2").val()) {
                $("#passwordError").attr("hidden", true);
            }
            else {
                $("#passwordError").attr("hidden", false);
                $("#passwordError").html("your passwords are not matching");
                count++;
            }
        }
    }
    if(count==0){
        $("#form").submit();
        
      } 
      else{
        $("#form").submit(function(event) {event.preventDefault();});
    } 
})


