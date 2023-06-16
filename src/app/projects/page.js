import { prisma } from '@/utils/db.server.js';
import Link from 'next/link';

export const metadata = {
  title: 'پروژه ها',
  description: 'پروژه هایی که توسط من طراحی و توسعه داده شده',
};

export default async function ProjectsPage() {
  const projects = await prisma.projects.findMany({
    where: {
      published: true,
    },
    orderBy: [
      {
        publish_date: 'desc',
      },
    ],
  });

  return (
    <section className='pt-12'>
      <div className='pb-28 text-center'>
        <h1 className='pb-4 text-3xl text-zinc-950'>پروژه ها</h1>
        <p>پروژه هایی که توسط من طراحی و توسعه داده شده</p>
      </div>
      <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => {
          return (
            <div className='group relative' key={project.id}>
              <div className='aspect-h-1 aspect-w-1 relative w-full overflow-hidden rounded-xl bg-gray-200 lg:aspect-none group-hover:opacity-75 dark:bg-zinc-900 lg:h-72'>
                <img
                  src={project.image_url}
                  alt={project.title}
                  className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                  loading='lazy'
                />
              </div>
              <div className='mt-4 flex w-full justify-between'>
                <h2 className='break-words text-sm font-medium text-zinc-700'>
                  <Link href={`/projects/${project.slug}`} className='text-inherit hover:no-underline'>
                    <span aria-hidden='true' className='absolute inset-0' />
                    {project.title}
                  </Link>
                </h2>
                <Link href={project.preview_url || '#'} className='z-10 flex-none text-sm' target='_blank'>
                  پیش نمایش زنده
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
