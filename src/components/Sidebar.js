export default function Sidebar(){
  return (
    <aside className='w-full p-6 lg:mx-auto lg:max-w-5xl'>
  <section id='latestProjects'>
    <div
      className="relative py-24 text-center after:absolute after:inset-x-0 after:inset-y-1/2 after:-z-10 after:h-px after:w-full after:bg-zinc-200 after:content-[''] dark:after:bg-zinc-800">
      <h2
        className='z-10 inline bg-white px-4 text-xl font-bold dark:bg-zinc-950 dark:text-zinc-100'>
        آخرین پروژه ها
      </h2>
    </div>
    <div
      className='grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
      {/* {
        latestProjects.map((project) => {
          return (
            <div className='group relative overflow-hidden'>
              <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-200 lg:aspect-none  dark:bg-zinc-900 lg:h-72'>
                <img
                  src={
                    project.frontmatter.image.url
                      ? `/images/projects/${project.frontmatter.image.url}`
                      : '/images/no-img-placeholder.png'
                  }
                  alt={project.frontmatter.image.alt || ''}
                  className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                  onerror="this.onerror=null; this.src='/images/no-img-placeholder.png'"
                />
              </div>
              <a href={project.url}>
                <span aria-hidden='true' className='absolute inset-0' />
              </a>
              <div className='absolute inset-x-0 mx-2 flex items-center justify-between rounded-xl bg-zinc-800 py-2 pl-2 pr-3 transition-transform duration-300 ease-in-out group-hover:translate-y-[calc(-100%-0.5rem)]'>
                <h2 className='break-words text-sm font-medium text-zinc-100'>
                  <a href={project.url} className='text-inherit hover:no-underline'>
                    <span aria-hidden='true' className='absolute inset-0' />
                    {project.frontmatter.title || 'بدون عنوان'}
                  </a>
                </h2>
                <a
                  href={project.frontmatter.previewUrl}
                  className='z-10 rounded-full p-3 text-zinc-100 transition-all duration-200 ease-in hover:bg-zinc-900 '>
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
                    className='h-6 w-6'>
                    <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
                    <circle cx='12' cy='12' r='3' />
                  </svg>
                </a>
              </div>
            </div>
          );
        })
      } */}
    </div>
  </section>
  <section id='latestProducts'>
    <div
      className="relative py-24 text-center after:absolute after:inset-x-0 after:inset-y-1/2 after:-z-10 after:h-px after:w-full after:bg-zinc-200 after:content-[''] dark:after:bg-zinc-800">
      <h2
        className='z-10 inline bg-white px-4 text-xl font-bold dark:bg-zinc-950 dark:text-zinc-100'>
        آخرین محصولات
      </h2>
    </div>
    <div
      className='grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
      {/* {
        latestProducts.map((product) => {
          return (
            <div className='group relative overflow-hidden'>
              <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-200 lg:aspect-none  dark:bg-zinc-900 lg:h-72'>
                <img
                  src={
                    product.frontmatter.image.url
                      ? `/images/products/${product.frontmatter.image.url}`
                      : '/images/no-img-placeholder.png'
                  }
                  alt={product.frontmatter.image.alt || ''}
                  className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                  onerror="this.onerror=null; this.src='/images/no-img-placeholder.png';"
                />
              </div>
              <a href={product.url}>
                <span aria-hidden='true' className='absolute inset-0' />
              </a>
              <div className='absolute inset-x-0 mx-2 flex items-center justify-between rounded-xl bg-zinc-800 py-2 pl-2 pr-3 transition-transform duration-300 ease-in-out group-hover:translate-y-[calc(-100%-0.5rem)]'>
                <h2 className='break-words text-sm font-medium text-zinc-100'>
                  <a
                    href={product.frontmatter.productUrl}
                    className='text-inherit hover:no-underline'>
                    <span aria-hidden='true' className='absolute inset-0' />
                    {product.frontmatter.title || 'بدون عنوان'}
                  </a>
                </h2>
                <a
                  href={product.frontmatter.productUrl}
                  className='z-10 rounded-full p-3 text-zinc-100 transition-all duration-200 ease-in hover:bg-zinc-900'>
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
                    className='h-6 w-6'>
                    <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
                    <circle cx='12' cy='12' r='3' />
                  </svg>
                </a>
              </div>
            </div>
          );
        })
      } */}
    </div>
  </section>
</aside>
  )
}