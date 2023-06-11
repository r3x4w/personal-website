export const metadata = {
  title: 'پروژه ها | رکسا',
  description: ''
}


export default function ProjectsPage() {
  return (
    <section className='pt-12'>
    <div className='pb-28 text-center'>
      <h1 className='pb-4 text-3xl text-zinc-950'>پروژه ها</h1>
      <p>پروژه هایی که توسط من طراحی و توسعه داده شده</p>
    </div>
    <div
      className='grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
      {/* {
        projects.map((project) => {
          return (
            <div className='group relative'>
              <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-200 lg:aspect-none group-hover:opacity-75 dark:bg-zinc-900 lg:h-72'>
                <img
                  src={
                    project.frontmatter.image.url
                      ? `/images/projects/${project.frontmatter.image.url}`
                      : '/images/no-img-placeholder.png'
                  }
                  alt={project.frontmatter.image.alt || ''}
                  className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                  onerror="this.onerror=null; this.src='/images/no-img-placeholder.png'"
                  loading='lazy'
                />
              </div>
              <div className='mt-4 flex w-full justify-between'>
                <h2 className='break-words text-sm font-medium text-zinc-700'>
                  <a href={project.url} className='text-inherit hover:no-underline'>
                    <span aria-hidden='true' className='absolute inset-0' />
                    {project.frontmatter.title || 'بدون عنوان'}
                  </a>
                </h2>
                <a
                  href={project.frontmatter.previewUrl}
                  className='z-10 flex-none text-sm'
                  target='_blank'>
                  پیش نمایش زنده
                </a>
              </div>
            </div>
          );
        })
      } */}
    </div>
  </section>
  )
}