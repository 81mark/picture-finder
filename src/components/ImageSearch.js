import React, { useState } from 'react';

const ImageSearch = ({ searchText, newPage }) => {
	const [text, setText] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		searchText(text);
		newPage(1);
		e.target.parentNode.focus();
	};

	return (
		<div className='max-w-sm overflow-hidden my-10 mx-auto' tabIndex='1'>
			<form onSubmit={onSubmit} className='w-full max-w-xs mx-auto'>
				<div className='flex items-center border-b border-b-2 border-blue-700 py-2'>
					<input
						onChange={(e) => setText(e.target.value)}
						type='text'
						placeholder='Search for image...'
						className='focus:outline-none appearance-none bg-transparent border-none w-full text-blue-500 mr-3 py-1 px-2 leading-tight focus:outline-none'
					/>
					<button
						className='flex-shrink-0 bg-blue-700 hover:bg-blue-900 border-blue-700 hover:border-blue-900 text-sm border-4 text-white py-1 px-2'
						type='submit'
					>
						Search
					</button>
				</div>
			</form>
		</div>
	);
};

export default ImageSearch;
