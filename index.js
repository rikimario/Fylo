
let emailText = document.getElementById('emailText');
let textWrongEmail = document.querySelector('.emailTitleCaution');
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g


let signUpBtn = document.getElementById('signUpBtn');
signUpBtn.addEventListener('click', () => {
  let emailValue = emailText.value;

  if (emailValue === '') {
    return;
  }

  if (!emailRegex.test(emailValue)) {
    emailText.classList.add('Caution'); // Add 'Caution' class to the input
    textWrongEmail.classList.add('Active');
  } else {
    emailText.classList.remove('Caution'); // Remove 'Caution' class from the input
    textWrongEmail.classList.remove('Active');
    window.open('https://github.com/rikimario', '_blank');
  }

  emailText.value = '';
});

let signUpSection = document.getElementById('signUpSection');
let signIn = document.getElementById('signIn');
signIn.addEventListener('click', () => {
  signUpSection.scrollIntoView({ behavior: 'smooth' });
});

let features = document.getElementById('features');
let featuresBtn = document.getElementById('featuresBtn');
featuresBtn.addEventListener('click', () => {
  features.scrollIntoView({ behavior: 'smooth' });
});

let comments = document.getElementById('comments');
let teamBtn = document.getElementById('teamBtn');
teamBtn.addEventListener('click', () => {
  comments.scrollIntoView({ behavior: 'smooth' });
});
