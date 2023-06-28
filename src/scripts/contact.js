import '../styles/contact.css';
import { createMain, createFooter, createHeader, createNavigation, createContent } from './main.js';

const main = createMain();
const content = createContent();
const formContainer = document.createElement('div');
const form = document.createElement('form');
const nameContainer = document.createElement('div');
const emailContainer = document.createElement('div');
const subjectContainer = document.createElement('div');
const messageContainer = document.createElement('div');
const nameLabel = document.createElement('label');
const emailLabel = document.createElement('label');
const subjectLabel = document.createElement('label');
const messageLabel = document.createElement('label');
const nameInput = document.createElement('input');
const nameError = document.createElement('span');
const emailInput = document.createElement('input');
const emailError = document.createElement('span');
const subjectInput = document.createElement('input');
const subjectError = document.createElement('span');
const messageTextArea = document.createElement('textarea');
const messageError = document.createElement('span');
const submitBtn = document.createElement('button');
const contactContainer = document.createElement('div');
const contactText = document.createElement('p');
const contactLink = document.createElement('a');

formContainer.classList.add('form-container');
contactContainer.classList.add('contact-container');

form.action = 'mailto:kylekeene.welch@gmail.com';
form.method = 'GET';
form.noValidate = true;
form.autocomplete = 'off';
form.enctype = 'text/plain';

nameLabel.textContent = 'Name';
nameLabel.htmlFor = 'name';
emailLabel.textContent = 'Email';
emailLabel.htmlFor = 'email';
subjectLabel.textContent = 'Subject';
subjectLabel.htmlFor = 'subject';
messageLabel.textContent = 'Message';
messageLabel.htmlFor = 'message';

nameError.id = 'name-error';
nameError.classList.add('error');
nameError.ariaLive = 'polite';
emailError.id = 'email-error';
emailError.classList.add('error');
emailError.ariaLive = 'polite';
subjectError.id = 'subject-error';
subjectError.classList.add('error');
subjectError.ariaLive = 'polite';
messageError.id = 'message-error';
messageError.classList.add('error');
messageError.ariaLive = 'polite';

nameInput.type = 'text';
nameInput.name = 'name';
nameInput.placeholder = 'Enter your name...';
nameInput.minLength = '3';
nameInput.maxLength = '200';
nameInput.required = true;

emailInput.type = 'email';
emailInput.name = 'email';
emailInput.placeholder = 'Enter your email...';
emailInput.minLength = '8';
emailInput.maxLength = '200';
emailInput.required = true;

subjectInput.type = 'text';
subjectInput.name = 'subject';
subjectInput.placeholder = 'Enter a subject...';
subjectInput.minLength = '3';
subjectInput.maxLength = '200';
subjectInput.required = true;

messageTextArea.name = 'message';
messageTextArea.placeholder = 'Enter your message...';
messageTextArea.minLength = '3';
messageTextArea.maxLength = '500';
messageTextArea.required = true;

submitBtn.textContent = 'Submit';
submitBtn.type = 'submit';

nameInput.addEventListener("input", (e) => {
        if (nameInput.validity.tooShort) {
            nameInput.classList.remove('valid');
            nameError.textContent = "Name needs to be at least 3 characters";
            nameError.style.display = 'inline-block';
        }
        else if(nameInput.validity.valueMissing) {
            nameInput.classList.remove('valid');
            nameError.textContent = "Name is required";
            nameError.style.display = 'inline-block';
    
        }
        else if (nameInput.checkValidity()) {
            nameInput.classList.add('valid');
            nameError.textContent = '';
            nameError.style.display = 'none';
        }
});

emailInput.addEventListener("input", (e) => {
    if (emailInput.validity.tooShort) {
        emailInput.classList.remove('valid');
        emailError.textContent = "Email needs to have at least 8 characters";
        emailError.style.display = 'inline-block';
    }
    else if (emailInput.validity.typeMismatch) {
        emailInput.classList.remove('valid');
        emailError.textContent = "Please enter a valid email address";
        emailError.style.display = 'inline-block';
    }
    else if(emailInput.validity.valueMissing) {
        emailInput.classList.remove('valid');
        emailError.textContent = "Email is required";
        emailError.style.display = 'inline-block';

    }
    else if (emailInput.checkValidity()) {
        emailInput.classList.add('valid');
        emailError.textContent = '';
        emailError.style.display = 'none';
    }
});

subjectInput.addEventListener("input", (e) => {
    if (subjectInput.validity.tooShort) {
        subjectInput.classList.remove('valid');
        subjectError.textContent = "Subject needs to be at least 3 characters";
        subjectError.style.display = 'inline-block';
    }
    else if(subjectInput.validity.valueMissing) {
        subjectInput.classList.remove('valid');
        subjectError.textContent = "Subject is required";
        subjectError.style.display = 'inline-block';

    }
    else if (subjectInput.checkValidity()) {
        subjectInput.classList.add('valid');
        subjectError.textContent = '';
        subjectError.style.display = 'none';
    }
});

messageTextArea.addEventListener("input", (e) => {
    if (messageTextArea.validity.tooShort) {
        messageTextArea.classList.remove('valid');
        messageError.textContent = "Message needs to be at least 3 characters";
        messageError.style.display = 'inline-block';
    }
    else if(messageTextArea.validity.valueMissing) {
        messageTextArea.classList.remove('valid');
        messageError.textContent = "Message is required";
        messageError.style.display = 'inline-block';

    }
    else if (messageTextArea.checkValidity()) {
        messageError.textContent = '';
        messageError.style.display = 'none';
        messageTextArea.classList.add('valid');
    }
});

form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
        e.preventDefault();
    }
});

function addLineBreak() {
    return document.createElement('br');
}

contactText.textContent = 'Or alternatively, contact us on 01234 87364732 or email ';
contactLink.text = 'kylekeene.welch@gmail.com';
contactLink.href = 'mailto:kylekeene.welch@gmail.com';
contactText.appendChild(contactLink);
contactContainer.appendChild(contactText);

nameContainer.appendChild(nameLabel);
nameContainer.appendChild(addLineBreak());
nameContainer.appendChild(nameInput);
nameContainer.appendChild(addLineBreak());
nameContainer.appendChild(nameError);
nameContainer.appendChild(addLineBreak());

emailContainer.appendChild(emailLabel);
emailContainer.appendChild(addLineBreak());
emailContainer.appendChild(emailInput);
emailContainer.appendChild(addLineBreak());
emailContainer.appendChild(emailError);
emailContainer.appendChild(addLineBreak());

subjectContainer.appendChild(subjectLabel);
subjectContainer.appendChild(addLineBreak());
subjectContainer.appendChild(subjectInput);
subjectContainer.appendChild(addLineBreak());
subjectContainer.appendChild(subjectError);
subjectContainer.appendChild(addLineBreak());

messageContainer.appendChild(messageLabel);
messageContainer.appendChild(addLineBreak());
messageContainer.appendChild(messageTextArea);
messageContainer.appendChild(addLineBreak());
messageContainer.appendChild(messageError);
messageContainer.appendChild(addLineBreak());

form.appendChild(nameContainer);
form.appendChild(emailContainer);
form.appendChild(subjectContainer);
form.appendChild(messageContainer);
form.appendChild(submitBtn);

formContainer.appendChild(form);
content.appendChild(formContainer);
content.appendChild(contactContainer);
main.appendChild(createHeader());
main.appendChild(createNavigation('contact'));
main.appendChild(content);
main.appendChild(createFooter());
document.body.appendChild(main);