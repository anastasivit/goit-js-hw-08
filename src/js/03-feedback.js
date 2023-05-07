import throttle from 'lodash.throttle';

const saveFormState = () => {
  const emailInput = document.querySelector('input[name="email"]');
  const messageInput = document.querySelector('textarea[name="message"]');
  const feedbackFormState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
};

document
  .querySelector('.feedback-form')
  .addEventListener('input', throttle(saveFormState, 500));

const feedbackFormState = JSON.parse(
  localStorage.getItem('feedback-form-state')
);

if (feedbackFormState) {
  document.querySelector('input[name="email"]').value = feedbackFormState.email;
  document.querySelector('textarea[name="message"]').value =
    feedbackFormState.message;
}

document.querySelector('.feedback-form').addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  document.querySelector('input[name="email"]').value = '';
  document.querySelector('textarea[name="message"]').value = '';
  const feedbackFormState = {
    email: '',
    message: '',
  };
  console.log(feedbackFormState);
});
