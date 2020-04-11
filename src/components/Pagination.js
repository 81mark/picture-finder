import React from 'react';

const Pagination = ({ newPage, page }) => {
	const NextPage = () => {
		page = page + 1;
		newPage(page);
	};

	const PreviousPage = () => {
		if (page !== 1) {
			page = page - 1;
			newPage(page);
		}
	};

	return (
		<div className='max-w-md overflow-hidden my-10 mx-auto'>
			<div className='flex items-center justify-between'>
				{page > 1 && (
					<button
						className='flex-shrink-0 bg-blue-700 hover:bg-blue-900 border-blue-700 hover:border-blue-900 text-sm border-4 text-white py-1 px-2'
						type='button'
						onClick={PreviousPage}
					>
						Previous Page
					</button>
				)}

				<p className='text-2xl text-blue-500 mx-4'>Page #{page}</p>
				<button
					className='flex-shrink-0 bg-blue-700 hover:bg-blue-900 border-blue-700 hover:border-blue-900 text-sm border-4 text-white py-1 px-2'
					type='button'
					onClick={NextPage}
				>
					Next Page
				</button>
			</div>
		</div>
	);
};

export default Pagination;
