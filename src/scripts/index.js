import Typewriter from 'typewriter-effect/dist/core';

document.addEventListener('DOMContentLoaded', () => {
  new Typewriter('#typingEffect', {
    strings: [
      'من کی ام؟',
      'توسعه دهنده فرانت-اند',
      'کاربر گنو/لینوکس',
      'علاقه مند به نرم افزار های آزاد',
      'برنامه نویس دون پایه پایتون',
      'هنرجوی شبکه و نرم افزار درحد ping 192.168.1.1',
    ],
    autoStart: true,
    loop: true,
  });
  
})