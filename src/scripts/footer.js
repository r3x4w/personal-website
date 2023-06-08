window.addEventListener('DOMContentLoaded', () => {
  const arrowUpButton = document.querySelector('#arrowUp');
  arrowUpButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
