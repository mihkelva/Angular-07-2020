
var registrationsDiv = document.getElementById("registrations");
console.log(registrationsDiv);
var registrationsData = "";

function buildForm() {
    var isEditMode = localStorage.getItem("editmode");
    console.log(isEditMode);
    if (isEditMode=="true") {
        document.getElementById("firstname").value = localStorage.getItem("firstname");
        document.getElementById("lastname").value = localStorage.getItem("lastname");
        document.getElementById("phone").value = localStorage.getItem("phone");
        document.getElementById("email").value = localStorage.getItem("email");
    }
    localStorage.removeItem("editmode");
}

function onSubmit(e) {
    // preventDefault abil ei tule refreshi
    // e tähendab eventi
    e.preventDefault();
    console.log(e);
    console.log("töötab");

    var registrationForm = document.forms["registrationForm"];

    console.log(registrationForm);
    console.log(registrationForm["firstname"]);
    console.log(registrationForm["firstname"].value);

    var firstName = registrationForm["firstname"].value;
    console.log(firstName);
    var lastName = registrationForm["lastname"].value;
    console.log(lastName);
    var number = registrationForm["phone"].value;
    console.log(number);
    var email = registrationForm["email"].value;
    console.log(email);

    registrationForm.reset();

    // registrationsData += + "E: " + firstName + ". P: " + lastName + ". T: " + number + ". E: " + email + "<br>";
    // registrationsDiv.innerHTML = registrationsData;

    localStorage.setItem("firstname", firstName);
    localStorage.setItem("lastname", lastName);
    localStorage.setItem("phone", number);
    localStorage.setItem("email", email);

    location.href = "review.html";
}