import { prisma } from '@/utils/db.server.js';
import Link from 'next/link';

export const metadata = {
  title: 'محصولات',
  description: 'محصولاتی که توسط من طراحی و توسعه داده شده',
};

export default async function ProductsPage() {
  const products = await prisma.products.findMany({
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
        <h1 className='pb-4 text-3xl text-zinc-950'>محصولات</h1>
        <p>محصولاتی که توسط من طراحی و توسعه داده شده</p>
      </div>
      <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3'>
        {products.map((product) => {
          return (
            <div className='group relative' key={product.id}>
              <div className='aspect-h-1 aspect-w-1 relative w-full overflow-hidden rounded-xl bg-gray-200 lg:aspect-none group-hover:opacity-75 dark:bg-zinc-900 lg:h-72'>
                <img
                  src={product.image_url}
                  alt={product.title}
                  className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                  loading='lazy'
                />
              </div>
              <div className='mt-4 flex w-full justify-between'>
                <h2 className='break-words text-sm font-medium text-zinc-700'>
                  <Link href={product.purchase_url} className='text-inherit hover:no-underline' target='_blank'>
                    <span aria-hidden='true' className='absolute inset-0' />
                    {product.title}
                  </Link>
                </h2>
                <p className='text-sm font-medium text-zinc-900 dark:text-zinc-100'>{product.price} تومان</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
