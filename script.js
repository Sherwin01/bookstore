// Update the year in the footer dynamically
document.getElementById('year').textContent = new Date().getFullYear();

// Login form validation
        function validateLoginForm() {
            let username = document.getElementById('loginUsername').value;
            let password = document.getElementById('loginPassword').value;
            let isValid = true;

            if (username.trim() === "") {
                document.getElementById('loginUsername').classList.add('is-invalid');
                isValid = false;
            } else {
                document.getElementById('loginUsername').classList.remove('is-invalid');
            }

            if (password.length < 6) {
                document.getElementById('loginPassword').classList.add('is-invalid');
                isValid = false;
            } else {
                document.getElementById('loginPassword').classList.remove('is-invalid');
            }

            return isValid;
        }

        // Register form validation
        function validateRegisterForm() {
            let username = document.getElementById('registerUsername').value;
            let email = document.getElementById('registerEmail').value;
            let password = document.getElementById('registerPassword').value;
            let confirmPassword = document.getElementById('registerConfirmPassword').value;
            let isValid = true;

            // Username validation
            if (username.trim() === "") {
                document.getElementById('registerUsername').classList.add('is-invalid');
                isValid = false;
            } else {
                document.getElementById('registerUsername').classList.remove('is-invalid');
            }

            // Email validation
            if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
                document.getElementById('registerEmail').classList.add('is-invalid');
                isValid = false;
            } else {
                document.getElementById('registerEmail').classList.remove('is-invalid');
            }

            // Password validation
            if (password.length < 6) {
                document.getElementById('registerPassword').classList.add('is-invalid');
                isValid = false;
            } else {
                document.getElementById('registerPassword').classList.remove('is-invalid');
            }

            // Confirm password validation
            if (password !== confirmPassword) {
                document.getElementById('registerConfirmPassword').classList.add('is-invalid');
                isValid = false;
            } else {
                document.getElementById('registerConfirmPassword').classList.remove('is-invalid');
            }

            return isValid;
        }
    