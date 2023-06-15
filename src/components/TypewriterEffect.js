"use client"

import Typewriter from 'typewriter-effect';

export default function TypewriterEffect() {
  return (
    <h1 className='pb-8 text-5xl leading-normal dark:text-zinc-50'>
      <Typewriter
        options={{
          strings: [
            'من کی ام؟',
            'توسعه دهنده فرانت-اند',
            'کاربر گنو/لینوکس',
            'علاقه مند به نرم افزار های آزاد',
            'برنامه نویس دون پایه پایتون',
            'هنرجوی سابق شبکه و نرم افزار',
            'در حال تلاش برای Full Stack JS Developer شدن'
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </h1>
  );
}
