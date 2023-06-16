'use client';

export default function ArrowUp() {
  const handleGoingToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div
      className='absolute inset-x-1/2 -top-10 m-0 flex h-12 w-12 translate-x-1/2 rotate-45 items-center justify-center rounded-xl border-2 border-zinc-950 bg-white text-zinc-950 transition-colors ease-in-out hover:cursor-pointer hover:bg-zinc-950 hover:bg-zinc-950 hover:text-zinc-50 dark:border-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900'
      title='Go to the top'
      onClick={handleGoingToTop}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='h-6 w-6 -rotate-45'>
        <polyline points='18 15 12 9 6 15'></polyline>
      </svg>
    </div>
  );
}
