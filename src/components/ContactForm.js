'use client';

import emailjs from '@emailjs/browser';

export default function ContactForm() {
	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs.sendForm('service_w2freke', 'template_obex41x', '#contactForm', 'Hpr0Aph44-R7Uf9wb').then(
			(res) => {
				console.log('SUCCESS!', res.status, res.text);
				e.target.reset();
				alert('پیام شما با موفقیت ارسال شد.');
			},
			(err) => {
				console.log('FAILED...', err);
				alert('ارسال پیام با خطا مواجه شد.');
			}
		);
	};

	return (
		<form id='contactForm' autoComplete='off' onSubmit={(e) => handleSubmit(e)}>
			<input autoComplete='false' name='hidden' type='text' style={{ display: 'none' }} />
			<div className='visible mx-auto grid max-w-5xl grid-cols-12 gap-4 gap-x-6 lg:gap-6'>
				<div className='col-span-12 flex flex-col justify-between space-y-16 rounded-xl bg-zinc-100 p-6 shadow dark:bg-zinc-900 sm:col-span-6 sm:space-y-0 lg:col-span-4'>
					<div>
						<h3 className='pb-2 text-xl font-bold text-zinc-800 dark:text-zinc-200 sm:text-2xl'>اطلاعات تماس</h3>
						<p>با روش های زیر با ما در تماس باشید.</p>
					</div>
					<div className='space-y-4'>
						<div className='flex items-center gap-4'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='h-6 w-6'>
								<rect x='5' y='2' width='14' height='20' rx='2' ry='2'></rect>
								<line x1='12' y1='18' x2='12.01' y2='18'></line>
							</svg>
							<span className='inline-block align-middle'> در دسترس نیست</span>
						</div>
						<div className='flex items-center gap-4'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='h-6 w-6'>
								<circle cx='12' cy='12' r='4'></circle>
								<path d='M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94'></path>
							</svg>
							<span className='inline-block align-middle'>thisisrexa@gmail.com</span>
						</div>
						<div className='flex items-center gap-4'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='h-6 w-6'>
								<path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
								<circle cx='12' cy='10' r='3'></circle>
							</svg>
							<span className='rtl font-vazir-vf inline-block align-middle'>ایران، استان مرکزی</span>
						</div>
					</div>
					<div className='flex items-center justify-end gap-4'>
						<a
							href='https://t.me/r3x4w'
							target='_blank'
							title='کانال تلگرام'
							className='text-zinc-700 transition-colors ease-out hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-600'>
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
								<line x1='22' y1='2' x2='11' y2='13'></line>
								<polygon points='22 2 15 22 11 13 2 9 22 2'></polygon>
							</svg>
						</a>
						<a
							href='#'
							target='_blank'
							title='لینکدین'
							className='text-zinc-700 transition-colors ease-out hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-600'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='h-6 w-6'>
								<path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
								<rect x='2' y='9' width='4' height='12'></rect>
								<circle cx='4' cy='4' r='2'></circle>
							</svg>
						</a>
						<a
							href='https://github.com/r3x4w'
							target='_blank'
							title='گیت هاب'
							className='text-zinc-700 transition-colors ease-out hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-600'>
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
								<path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
							</svg>
						</a>

						<a
							href='https://twitter.com/r3x4w'
							target='_blank'
							title='توییتر'
							className='text-zinc-700 transition-colors ease-out hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-600'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='h-6 w-6'>
								<path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'></path>
							</svg>
						</a>
						<a
							href='https://www.instagram.com/r3x4w'
							target='_blank'
							title='اینستاگرام'
							className='text-zinc-700 transition-colors ease-out hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-600'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='h-6 w-6'>
								<rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect>
								<path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
								<line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
							</svg>
						</a>
					</div>
				</div>
				<div className='col-span-12 grid grid-cols-12 gap-4 sm:col-span-6 lg:col-span-8'>
					<div className='col-span-12'>
						<label
							htmlFor='name'
							className="block pb-2 text-sm font-medium text-zinc-700 after:text-red-600 after:content-['*'] dark:text-zinc-300">
							نام کامل
						</label>
						<input
							type='text'
							className='block w-full rounded-lg border border-zinc-300 bg-white p-3 text-sm placeholder-zinc-400 shadow-sm focus:border-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-600 dark:border-zinc-700 dark:bg-zinc-950 dark:placeholder-zinc-500 dark:focus:border-zinc-400 dark:focus:ring-zinc-400'
							name='name'
							id='name'
							placeholder='علی ابراهیمی'
							required
						/>
					</div>
					<div className='col-span-12 lg:col-span-6'>
						<label
							htmlFor='email'
							className="block pb-2 text-sm font-medium text-zinc-700 after:text-red-600 after:content-['*'] dark:text-zinc-300">
							ایمیل
						</label>
						<input
							type='email'
							className='ltr block w-full rounded-lg border border-zinc-300 bg-white p-3 text-sm placeholder-zinc-400 shadow-sm focus:border-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-600 dark:border-zinc-700 dark:bg-zinc-950 dark:placeholder-zinc-500 dark:focus:border-zinc-400 dark:focus:ring-zinc-400'
							name='email'
							id='email'
							placeholder='example@example.com'
							required
						/>
					</div>
					<div className='col-span-12 lg:col-span-6'>
						<label htmlFor='phone' className='block pb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300'>
							تلفن
						</label>
						<input
							type='text'
							className='ltr block w-full rounded-lg border border-zinc-300 bg-white p-3 text-sm placeholder-zinc-400 shadow-sm focus:border-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-600 dark:border-zinc-700 dark:bg-zinc-950 dark:placeholder-zinc-500 dark:focus:border-zinc-400 dark:focus:ring-zinc-400'
							name='phone'
							id='phone'
							placeholder='+98 912 345 6789'
						/>
					</div>
					<div className='col-span-12'>
						<label
							htmlFor='message'
							className="block pb-2 text-sm font-medium text-zinc-700 after:text-red-600 after:content-['*'] dark:text-zinc-300">
							متن پیام
						</label>
						<textarea
							name='message'
							id='message'
							placeholder='سلام خوبی؟ پروژه ای با مشخصات زیر دارم...'
							required
							className='block min-h-[10rem] w-full rounded-lg border border-zinc-300 bg-white p-3 text-sm placeholder-zinc-400 shadow-sm focus:border-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-600 dark:border-zinc-700 dark:bg-zinc-950 dark:placeholder-zinc-500 dark:focus:border-zinc-400 dark:focus:ring-zinc-400'></textarea>
					</div>
					<div className='col-span-12'>
						<input
							type='submit'
							value='ارسال پیام'
							className='btn w-full bg-zinc-800 text-white hover:bg-opacity-90 dark:bg-zinc-200 dark:text-zinc-950 dark:hover:bg-zinc-300'
						/>
					</div>
				</div>
			</div>
		</form>
	);
}
