   const validCredentials = {
    username: 'admin',
    password: 'admin123'
};

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validCredentials.username && password === validCredentials.password) {
        // Hide login form
        document.getElementById('loginContainer').style.display = 'none';
        // Show main content
        document.getElementById('mainContent').style.display = 'block';
        // Store login state
        sessionStorage.setItem('isLoggedIn', 'true');
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

// Check if user is already logged in
window.onload = function() {
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
    }
};