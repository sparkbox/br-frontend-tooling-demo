const init = () => {
  document.addEventListener('DOMContentLoaded', () => {
    addEventListeners(document.querySelectorAll('.js-trigger-tool-list'));
  });
};

const addEventListeners = (elements) => {
  Array.from(elements).forEach((n) => {
    n.addEventListener('click', toggleClass);
  });
};

const toggleClass = (e) => {
  // Toggle is open class
  e.target.parentElement.classList.toggle('tool-list_is-open');

  // Display the content
  let content = e.target.parentElement.parentElement.parentElement.querySelector('.js-list-dropdown');
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
};

export default {
  init
};
