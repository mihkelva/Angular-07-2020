var firstnameVal = localStorage.getItem("firstname");
var lastname = localStorage.getItem("lastname");
var phone = localStorage.getItem("phone");
var email = localStorage.getItem("email");

var firstnameHtml = document.getElementById("firstname");
var lastnameHtml = document.getElementById("lastname");
var phoneHtml = document.getElementById("phone");
var emailHtml = document.getElementById("email");

firstnameHtml.innerHTML = firstnameVal;
lastnameHtml.innerHTML = lastname;
phoneHtml.innerHTML = phone;
emailHtml.innerHTML = email;

class Person {
    constructor(firstname, lastname, phone, email) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
    }
}

function onReviewSubmit() {
    console.log("vajutus töötab");

    // javascript OR operator
    // ESIMENE KORD (kui ei ole localStorages):
    // var registrationList = []; <-- ( alati ei saa kasutada, 
    // teeks iga kord tühja registrationListi)
    // KUI JUBA ON OLEMAS, SIIS TEEB NII:
    // var registrationList = localStorage.getItem("registrations"); <-- 
    // (alati ei saa kasutada, viskab errori kui seda ei ole)
    console.log(localStorage.getItem("registrations"));
    console.log(JSON.parse(localStorage.getItem("registrations")))

    var registrationList = JSON.parse(localStorage.getItem("registrations")) || [];

    registrationList.push(new Person(firstnameVal, lastname, phone, email));

    console.log(registrationList);
    console.log(JSON.stringify(registrationList));
    localStorage.setItem("registrations", JSON.stringify(registrationList));

    // ["jaanuar",""]
}