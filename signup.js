
function validateSignUpForm(event) {
    event.preventDefault(); // Prevent form submission for validation

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validate username (3-20 characters, letters, numbers, underscores, and dots only)
    const usernamePattern = /^[a-zA-Z0-9._]{3,20}$/;
    if (!usernamePattern.test(username)) {
        alert("Please enter a valid username (3-20 characters, letters, numbers, underscores, and dots only).");
        return false;
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate password length (at least 8 characters)
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // Store the user data in localStorage
    const userData = {
        username: username,
        email: email,
        password: password
    };
    localStorage.setItem("user", JSON.stringify(userData));

    alert("Registration successful!");
    window.location.href = "Signin.html"; // Redirect to login page
}
(function () {
    emailjs.init({
        publicKey: "SP5uxVh1zRPpXtRtv",
    });
})();
function sendmail(){
    var inp = document.getElementsByClassName('inputs')
    if (inp[0].value == '' || inp[1].value == '' || inp[2].value == ''|| inp[3].value == '') {
        alert('Please fill in all the field ')
    }
    else{

    
    var obj = {
            "name": inp[0].value,
            "email": inp[1].value,
            "password": inp[2].value,
            "confirmpass":inp[3].value
}
emailjs.send('service_l7tawyj', 'template_tcpuw0o', obj);
}
}

