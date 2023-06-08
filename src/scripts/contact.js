import emailjs from '@emailjs/browser';

window.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('#contactForm');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_w2freke',
        'template_obex41x',
        '#contactForm',
        'Hpr0Aph44-R7Uf9wb'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('پیام شما با موفقیت ارسال شد.');
          contactForm.reset();
        },
        (error) => {
          console.log('FAILED...', error);
          alert('ارسال پیام با خطا مواجه شد.');
        }
      );
  });
});
