let handleForm = (e) => {

    e.preventDefault();

    let user = document.getElementById("user").value;
    let password = document.getElementById("pass").value;

    if (user === "") {
        alert("Enter your username");
    }
    else if (password.length < 6) {
        alert("Password must be greater than 6 characters");
    }
    else {
        alert("Login complete!");
    }

}