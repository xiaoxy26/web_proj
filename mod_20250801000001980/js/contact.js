// Form validation function
function validateForm(event) {
    event.preventDefault();
    
    // Get form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    
    // Get error elements
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const subjectError = document.getElementById('subject-error');
    const messageError = document.getElementById('message-error');
    
    // Get success message element
    const successMessage = document.getElementById('success-message');
    
    // Reset errors
    nameError.textContent = '';
    emailError.textContent = '';
    subjectError.textContent = '';
    messageError.textContent = '';
    successMessage.textContent = '';
    
    let isValid = true;
    
    // Validate name
    if (name.value.trim() === '') {
        nameError.textContent = getNameErrorMessage();
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        emailError.textContent = getEmailErrorMessage();
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        emailError.textContent = getEmailInvalidMessage();
        isValid = false;
    }
    
    // Validate subject
    if (subject.value.trim() === '') {
        subjectError.textContent = getSubjectErrorMessage();
        isValid = false;
    }
    
    // Validate message
    if (message.value.trim() === '') {
        messageError.textContent = getMessageErrorMessage();
        isValid = false;
    }
    
    // If form is valid, show success message
    if (isValid) {
        successMessage.textContent = getSuccessMessage();
        // Reset form
        document.getElementById('contact-form').reset();
    }
}

// Get error messages based on selected language
function getNameErrorMessage() {
    const language = document.getElementById('language-selector').value || 'en';
    const messages = {
        en: 'Name is required',
        fr: 'Le nom est requis'
    };
    return messages[language];
}

function getEmailErrorMessage() {
    const language = document.getElementById('language-selector').value || 'en';
    const messages = {
        en: 'Email is required',
        fr: 'L\'email est requis'
    };
    return messages[language];
}

function getEmailInvalidMessage() {
    const language = document.getElementById('language-selector').value || 'en';
    const messages = {
        en: 'Please enter a valid email address',
        fr: 'Veuillez entrer une adresse email valide'
    };
    return messages[language];
}

function getSubjectErrorMessage() {
    const language = document.getElementById('language-selector').value || 'en';
    const messages = {
        en: 'Subject is required',
        fr: 'Le sujet est requis'
    };
    return messages[language];
}

function getMessageErrorMessage() {
    const language = document.getElementById('language-selector').value || 'en';
    const messages = {
        en: 'Message is required',
        fr: 'Le message est requis'
    };
    return messages[language];
}

function getSuccessMessage() {
    const language = document.getElementById('language-selector').value || 'en';
    const messages = {
        en: 'Thank you! Your message has been sent successfully.',
        fr: 'Merci! Votre message a été envoyé avec succès.'
    };
    return messages[language];
}

// Update validation messages when language changes
document.getElementById('language-selector').addEventListener('change', function() {
    // We don't need to do anything here as the messages will be shown on form submission
});