import { useState } from 'react';

export default function Counter() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1 className='text-4xl font-bold text-red-500'>Count: {count}</h1>
			<button onClick={() => setCount((c) => c + 1)}>Increment</button>
		</>
	);
}
