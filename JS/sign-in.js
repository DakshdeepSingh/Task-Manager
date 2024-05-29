function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve existing users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || {};

    // Check if the username exists
    if (!users.hasOwnProperty(username)) {
        alert('Username does not exist. Please sign up.');
        return;
    }

    // Check if the password matches
    if (users[username] !== password) {
        alert('Incorrect password. Please try again.');
        return;
    }

    // Store the username in localStorage (if needed)
    localStorage.setItem('username', username);

    window.location.href = 'main.html';
}