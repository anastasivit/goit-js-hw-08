import throttle from 'lodash.throttle';

const formEl = document.querySelector('form');

let feedbackFormState = {};

const saveFormState = e => {
  feedbackFormState[e.target.name] = e.target.value.trim();
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
};

formEl.addEventListener('input', throttle(saveFormState, 500));

function losdData() {
  try {
    const data = localStorage.getItem('feedback-form-state');
    if (!data) return;
    feedbackFormState = JSON.parse(data);
    Object.entries(feedbackFormState).forEach(([key, value]) => {
      formEl.elements[key].value = value;
    });
  } catch (error) {
    console.log(error.message);
  }
}

formEl.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  e.target.reset();
  console.log(feedbackFormState);
  const feedbackFormState = {};
});
