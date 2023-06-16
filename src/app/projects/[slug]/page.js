import {prisma} from '@/utils/db.server.js';
import Link from 'next/link';

async function handler(slug){
	const project = await prisma.projects.findFirst({
		where: {
			AND: [
				{
					slug: slug,
				},
				{
					published: true,
				},
			],
		},
	});

	return project
}

export async function generateMetadata({params}){
	const project = await handler(params.slug)
	return {
		title: project.title,
	}
}


export default async function ProjectDetailPage({ params }) {
	const project = await handler(params.slug)

	const date = new Date(project.publish_date)
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()

	return (
		<div className='grid grid-cols-1 gap-6 sm:grid-cols-12 sm:gap-x-8 sm:pt-12'>
			<div className='aspect-h-1 sm:col-span-7 aspect-w-1 relative w-full overflow-hidden rounded-xl bg-gray-200 lg:aspect-none dark:bg-zinc-900 sm:order-1 lg:h-80'>
				<img
					src={project.image_url}
					alt={project.title}
					className='h-full w-full object-cover object-center lg:h-full lg:w-full'
					loading='lazy'
				/>
			</div>
			<div className='flex flex-col justify-between sm:col-span-5'>
				<div>
					<h1 className='pb-2 lg:text-3xl'>{project.title}</h1>
				<p className='pb-4 text-sm text-zinc-500'>
					منتشر شده در <time dateTime={`${year}-${month}-${day}`}>
						{`${year}/${month}/${day}`}
					</time>
				</p>
				<p className='pb-4'>
					{project.summary}
				</p>
				</div>
				<div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
					<Link
						href={project.preview_url || '#'}
						className='hover:no-underline'
						target='_blank'>
						<button disabled={project.preview_url ? false : true} className='btn disabled:opacity-25 flex flex-row-reverse items-center justify-center gap-x-2 bg-blue-600 text-white hover:opacity-90 w-full'>
							پیش نمایش
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'>
							<path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
							<circle cx='12' cy='12' r='3'></circle>
						</svg>
						</button>
					</Link>
					<Link
						href={project.repo_url || '#'}
						className='hover:no-underline'
						target='_blank'>
						<button disabled={project.repo_url ? false : true} className='btn flex disabled:opacity-25 flex-row-reverse items-center justify-center gap-x-2 bg-zinc-900 text-white hover:opacity-90 w-full'>
							گیت هاب
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'>
							<path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
						</svg>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
