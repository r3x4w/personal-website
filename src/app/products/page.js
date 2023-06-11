export const metadata = {
  title: 'محصولات | رکسا'
}


export default function ProductsPage() {
  return (
  <section className='pt-12'>
    <div className='pb-28 text-center'>
      <h1 className='pb-4 text-3xl text-zinc-950'>محصولات</h1>
      <p>محصولاتی که توسط من طراحی و توسعه داده شده</p>
    </div>
    <div
      className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
      {/* {
        newestProducts.map((product) => {
          return (
            <div className='group relative'>
              <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-200 lg:aspect-none group-hover:opacity-75 dark:bg-zinc-900 lg:h-72'>
                <img
                  src={
                    product.frontmatter.image.url
                      ? `/images/products/${product.frontmatter.image.url}`
                      : '/images/no-img-placeholder.png'
                  }
                  alt={product.frontmatter.image.alt || ''}
                  className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                  onerror="this.onerror=null; this.src='/images/no-img-placeholder.png'"
                  loading='lazy'
                />
              </div>
              <div className='mt-4 flex justify-between'>
                <h2 className='break-words text-sm font-medium text-zinc-700'>
                  <a
                    href={product.frontmatter.productUrl}
                    className='text-inherit hover:no-underline'
                    target='_blank'>
                    <span aria-hidden='true' className='absolute inset-0' />
                    {product.frontmatter.title || 'بدون عنوان'}
                  </a>
                </h2>
                <p className='text-sm font-medium text-zinc-900'>
                  {product.frontmatter.price} تومان
                </p>
              </div>
            </div>
          );
        })
      } */}
    </div>
  </section>

  )
}