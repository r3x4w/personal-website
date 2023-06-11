import TypewriterEffect from '@/components/TypewriterEffect'

export const metadata = {
  title: 'صفحه اصلی | رکسا',
  description: '',
};

export default function HomePage() {
  return (
    <div class='w-full py-32 text-center lg:py-48'>
      <TypewriterEffect />
      <div class='space-y-4'>
        <a
          href='/resume'
          class='btn btn-3d mx-1 border-2 border-zinc-950 dark:border-zinc-50 dark:bg-zinc-50 dark:text-zinc-950'>
          بریم کشف کنیم
        </a>
        <a
          href='#latestProjects'
          class='btn mx-1 border-2 border-zinc-950 text-zinc-950 hover:bg-zinc-100 dark:border-zinc-50 dark:text-zinc-50 dark:hover:bg-zinc-800'>
          میشناسمت
        </a>
      </div>
    </div>
  );
}
