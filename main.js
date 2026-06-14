document.querySelector('#submit-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const name = document.querySelector('input[placeholder="Your Name"]').value;
    if (name === '') {
        document.getElementById('name-error').textContent = 'Name is required.';
    }
    const email = document.querySelector('input[placeholder="Your Email"]').value;
    if (email === '' || !email.includes('@')) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
    }
    const number = document.querySelector('input[placeholder="Your Number"]').value;
    if (number === '') {
        document.getElementById('number-error').textContent = 'Number is required.';
    }
    const message = document.querySelector('textarea[placeholder="Your Message"]').value;
    if (message === '') {
        document.getElementById('message-error').textContent = 'Message is required.';
    }
    if (name !== '' && email !== '' && email.includes('@') && number !== '' && message !== '') {
        document.querySelector('.form').innerHTML = '<p>Thank you for your message! We will get back to you soon.</p>';
    }
});
document.querySelector('#menu-btn').addEventListener('click', function() {
    const ul = document.querySelector('nav ul');
    ul.classList.toggle('active');
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});