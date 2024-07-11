document.getElementById('register-btn').addEventListener('click', function() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    if (username && password) {
        alert('User registered successfully!');
        // Add backend integration to save user details
    } else {
        alert('Please enter a username and password.');
    }
});

document.getElementById('login-btn').addEventListener('click', function() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    if (username && password) {
        alert('User logged in successfully!');
        // Add backend integration for authentication
    } else {
        alert('Please enter a username and password.');
    }
});

document.getElementById('create-event-btn').addEventListener('click', function() {
    const eventName = document.getElementById('event-name').value.trim();
    const eventDate = document.getElementById('event-date').value;
    if (eventName && eventDate) {
        const eventList = document.getElementById('event-list');
        const newEvent = document.createElement('div');
        newEvent.classList.add('event');
        newEvent.innerHTML = `<div class="event-name">${eventName}</div><div class="event-date">${eventDate}</div>`;
        eventList.appendChild(newEvent);
        document.getElementById('event-name').value = '';
        document.getElementById('event-date').value = '';
    } else {
        alert('Please enter event name and date.');
    }
});