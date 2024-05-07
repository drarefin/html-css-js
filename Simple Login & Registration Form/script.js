document.addEventListener('DOMContentLoaded', function() {
    const showLoginFormBtn = document.getElementById('showLoginForm');
    const showRegisterFormBtn = document.getElementById('showRegisterForm');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const togglePasswordBtn = document.getElementById('togglePassword');
    const toggleNewPasswordBtn = document.getElementById('toggleNewPassword');
    const passwordInput = document.getElementById('password');
    const newPasswordInput = document.getElementById('registerPassword');
    const strengthIndicator = document.getElementById('strengthIndicator');

    showLoginFormBtn.addEventListener('click', function() {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });

    showRegisterFormBtn.addEventListener('click', function() {
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    });

    togglePasswordBtn.addEventListener('click', function() {
        togglePasswordVisibility(passwordInput, togglePasswordBtn);
    });

    toggleNewPasswordBtn.addEventListener('click', function() {
        togglePasswordVisibility(newPasswordInput, toggleNewPasswordBtn);
    });

    passwordInput.addEventListener('input', function() {
        const password = passwordInput.value;
        const strength = calculatePasswordStrength(password);
        updateStrengthIndicator(strength);
    });

    newPasswordInput.addEventListener('input', function() {
        const newPassword = newPasswordInput.value;
        const strength = calculatePasswordStrength(newPassword);
        updateStrengthIndicator(strength);
    });

    function togglePasswordVisibility(inputElement, toggleBtn) {
        if (inputElement.type === 'password') {
            inputElement.type = 'text';
            toggleBtn.textContent = 'Hide';
        } else {
            inputElement.type = 'password';
            toggleBtn.textContent = 'Show';
        }
    }

    function calculatePasswordStrength(password) {
        const length = password.length;
        if (length < 6) {
            return 'weak';
        } else if (length < 10) {
            return 'medium';
        } else {
            return 'strong';
        }
    }

    function updateStrengthIndicator(strength) {
        strengthIndicator.className = 'strength-indicator'; // Reset classes
        strengthIndicator.classList.add(strength); // Apply strength class
    }
});
