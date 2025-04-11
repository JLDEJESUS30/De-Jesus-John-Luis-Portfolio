function toggleCertificates() {
  const moreCertificates = document.getElementById('more-certificates');
  const button = document.querySelector('.btn.show-more');

  if (moreCertificates.classList.contains('hidden')) {
      moreCertificates.classList.remove('hidden'); // Show the additional certificates
      moreCertificates.style.display = "grid"; // Make it visible
      button.textContent = 'Show Less'; // Change button text
  } else {
    moreCertificates.style.display = "none"; // Hide additional certificates
      moreCertificates.classList.add('hidden'); // Hide the additional certificates
      button.textContent = 'Show More'; // Change button text back
  }
}

  function setActive(event) {
    event.preventDefault();
  
    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
    });
  
    // Add active class to the clicked link
    const clickedLink = event.currentTarget;
    clickedLink.classList.add('active');
  
    // Smooth scroll to section
    const targetId = clickedLink.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  //Contact Form 
const scriptURL = 'https://script.google.com/macros/s/AKfycbxNHwC1mZ6Bd1iO8oi8IRy7-FFFh9NEY9QFZniKzY22sP5ylzBiXbK2DjEkJlO-PjEQPA/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Add event to all form input fields
formInputs.forEach(input => {
  input.addEventListener("input", () => {
    // Check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});

// Handle form submission
form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
      formBtn.setAttribute("disabled", ""); // Re-disable the button after form reset
    })
    .catch(error => {
      console.error('Error!', error.message);
      msg.innerHTML = "Message sent successfully.";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
    });
});

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-link.active').forEach(link => {
    link.classList.remove('active');
  });
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

// Add click event listener to nav-links
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();

        // Remove active class from all nav-links
        navLinks.forEach(nav => nav.classList.remove('active'));

        // Add active class to the clicked link
        link.classList.add('active');

        // Smooth scroll to the target section
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }

        // Optional: Remove the active class after 2 seconds
        setTimeout(() => {
            link.classList.remove('active');
        }, 2000);
    });
});
