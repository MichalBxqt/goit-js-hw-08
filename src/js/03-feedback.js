import throttle from 'lodash.throttle';

const messageArea = document.querySelector('.feedback-form').elements.message;
const emailArea = document.querySelector('.feedback-form').elements.email;
const form = document.querySelector('.feedback-form');

form.addEventListener(
  'input',
  throttle(event => {
    event.preventDefault();

    const emailInput = emailArea.value;
    const messageInput = messageArea.value;

    const formValues = {
      email: emailInput,
      message: messageInput,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formValues));
  }, 500)
);

window.addEventListener('DOMContentLoaded', () => {
  const savedSett = localStorage.getItem('feedback-form-state');
  const parsedSett = JSON.parse(savedSett);

  if(parsedSett) {
  emailArea.value = parsedSett.email ?? '';
messageArea.value = parsedSett.message ?? '';}
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  const savedSett = localStorage.getItem('feedback-form-state');
  const parsedSett = JSON.parse(savedSett);

  console.log(`Email: ${parsedSett.email} Message: ${parsedSett.message} `)
  localStorage.removeItem('feedback-form-state');
  form.reset();
});
