import React from 'react';

const ImageCard = ({ image }) => {
	const tags = image.tags.split(',');

	return (
		<div className='max-w-sm overflow-hidden shadow-md'>
			<img
				src={image.webformatURL}
				className='w-full'
				alt={`Including imnages with these tags: ${image.tags}`}
			/>
			<div className='px-4 py-2'>
				<div className='font bold text-blue-600 text-xl mb-2'>{image.user}</div>
				<div className='flex flex-row-reverse justify-between my-4'>
					<img
						src={image.userImageURL}
						alt=''
						width='50px'
						height='50px'
						className='rounded-full justify-start'
					/>
					<div className='justify-end'>
						Views: <strong>{image.views}</strong>
						<br />
						Downloads: <strong>{image.downloads}</strong>
					</div>
				</div>
				<div>
					{tags.map((tag, index) => (
						<span
							key={index}
							className='inline-block rounded-sm shadow-sm px-3 py-1 text-sm mr-2 mb-2 bg-blue-600 text-white'
						>
							#{tag}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default ImageCard;
