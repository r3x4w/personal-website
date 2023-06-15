export default function ProgressBar({percent, children}) {
  return (

<li className='space-y-2'>
  <p className='font-medium text-zinc-800 dark:text-zinc-200'>
    {children}
  </p>
  <div
    className='block h-2 w-full rounded-sm ring-2 ring-zinc-950 dark:ring-zinc-50'>
    <div
      className='h-2 rounded-l-sm bg-zinc-950 dark:bg-zinc-50'
      style={{ width: percent + '%' }}>
    </div>
  </div>
</li>
  )
}