window.addEventListener('DOMContentLoaded', () => {
  const toggleMenuButton = document.querySelector('#toggleMenu');
  const mobileNavigationContainer = document.querySelector(
    '#mobileNavContainer'
  );
  const toggleDarkModeButton = document.querySelector('#toggleDarkMode');
  const moonIcon = document.querySelector('#moonIcon');
  const sunIcon = document.querySelector('#sunIcon');
  const Logo = document.querySelector('#logo');

  toggleMenuButton.addEventListener('click', () => {
    mobileNavigationContainer.classList.toggle('show');
    toggleMenuButton.classList.toggle('show');
      if (mobileNavigationContainer.classList.contains('show')) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto';
      }
  });

  toggleDarkModeButton.addEventListener('click', () => {
    if (localStorage.theme === 'dark') {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
      moonIcon.style.display = 'block';
      sunIcon.style.display = 'none';
      Logo.src = '../../images/logo-dark.svg';
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
      moonIcon.style.display = 'none';
      sunIcon.style.display = 'block';
      Logo.src = '../../images/logo-light.svg';
    }
  });

  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === 'dark') {
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
    Logo.src = '../../images/logo-light.svg';
  } else {
    moonIcon.style.display = 'block';
    sunIcon.style.display = 'none';
    Logo.src = '../../images/logo-dark.svg';
  }
});
