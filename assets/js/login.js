// My Login Access Email and Password:
const myEmail = "azharanowar@gmail.com";
const myPassword = "123456";

document.getElementById("loginBtn").addEventListener('click', function() {
    const userEmail = document.getElementById("email").value;
    const userPassword = document.getElementById("password").value;

    if ( userEmail === myEmail && userPassword === myPassword ) {
        window.open('bank-dashboard.html', '_self');
    }
    else if ( userEmail === "" || userPassword === "" ) {
        alert("Enter your email and password to login!");
    } else {
        alert("Invalid email or password! Please enter valid email and password to login.");
    }
});