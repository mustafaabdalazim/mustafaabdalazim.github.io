document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    // Simple validation
    if (name && email && message) {
        document.getElementById('formMessage').textContent = 'Thank you for contacting me, ' + name + '!';
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('formMessage').textContent = 'Please fill in all fields.';
        document.getElementById('formMessage').style.color = 'red';
    }
});
