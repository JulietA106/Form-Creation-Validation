document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent actual submit

    // retrieve + trim inputs
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // init validation state
    let isValid = true;
    const messages = [];

    // Username validation (at least 3 chars)
    if (username.length < 3) {
      isValid = false;
      messages.push('Username must be at least 3 characters long.');
    }

    // Email validation (must include '@' and '.')
    if (!(email.includes('@') && email.includes('.'))) {
      isValid = false;
      messages.push('Please enter a valid email address (must include "@" and ".").');
    }

    // Password validation (at least 8 chars)
    if (password.length < 8) {
      isValid = false;
      messages.push('Password must be at least 8 characters long.');
    }

    // show feedback
    feedbackDiv.style.display = 'block';

    if (isValid) {
      feedbackDiv.style.color = '#28a745'; // green for success
      feedbackDiv.textContent = 'Registration successful!';
      form.reset();
    } else {
      feedbackDiv.style.color = '#dc3545'; // red for errors
      feedbackDiv.innerHTML = messages.join('<br>');
    }
  });
});
