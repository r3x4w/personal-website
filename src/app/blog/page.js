export const metadata = {
  title: 'بلاگ'
}

export default function BlogPage() {
  return (
    <section className='pt-12'>
    <div className='pb-28 text-center'>
      <h1 className='pb-4 text-3xl text-zinc-950'>بلاگ</h1>
      <p>
        فعلا اینجا چیزی منتشر نمی کنم :( پست های زیر داخل ویرگول یا مدیوم منتشر
        شده
      </p>
    </div>
    <div
      className='grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-10'
      id='postsContainer'>
    </div>
  </section>
  )
}