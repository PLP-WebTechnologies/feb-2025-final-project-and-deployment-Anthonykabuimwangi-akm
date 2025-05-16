

// Form Validation
document.getElementById('newsletterform').addEventListener('submit', function(event) {
    e.preventDefault();
    const email = document.getElementById('newsletter-email').value;
    if (email.includes('@') && email.includes('.')) {
        alert('Thanks for subscribing!');
        this.reset();
    } else {
        alert('Please enter a valid email address.');
    }
});

document.getElementById('quote-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you soon.');
    this.reset();
});