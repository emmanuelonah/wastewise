function onLogIn(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  console.log('GBE', data);
}

function init() {
  const loginForm = document.querySelector('form');

  loginForm.addEventListener('submit', onLogIn);
}

/**
 * Main thread
 */
(function main() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
