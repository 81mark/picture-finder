import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import Pagination from './components/Pagination';
import Axios from 'axios';

function App() {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [term, setTerm] = useState('');
	const [page, setPage] = useState(1);

	useEffect(() => {
		const getImages = async () => {
			try {
				const results = await Axios.get(
					// proxy via Heroku instead of local
					`https://picture-proxy.herokuapp.com/api/v1/get-images?q=${term}&p=${page}`
					// `api/v1/get-images?q=${term}&p=${page}`
				);
				const images = results.data.images;
				if (results.data.success === true) {
					setImages(images.hits);
					setIsLoading(false);
				} else if (results.data.success === false) {
					setIsLoading(false);
				}
			} catch (err) {
				setIsLoading(false);
				console.error(`Error ${err}`);
				// TODO Better error handling for future
			}
		};
		getImages();
	}, [page, term]);

	return (
		<div className='container mx-auto'>
			<ImageSearch
				searchText={(text) => setTerm(text)}
				page={page}
				newPage={(page) => setPage(page)}
			/>

			{!isLoading && images.length === 0 && (
				<h1 className='text-4xl text-center mx-auto mt-32 text-blue-600'>
					No images were found...
				</h1>
			)}

			{isLoading ? (
				<h1 className='text-6xl text-center mx-auto mt-32 text-blue-600'>
					Loading...
				</h1>
			) : (
				<div className='max-w-sm my-10 mx-auto sm:grid sm:grid-cols-3 sm:gap-4 sm:max-w-full'>
					{images.map((image) => (
						<ImageCard key={image.id} image={image} />
					))}
				</div>
			)}

			<Pagination page={page} newPage={(page) => setPage(page)} />
			<a href='https://pixabay.com/' title='See Pixabay for more images'>
				<img
					className='max-w-sm overflow-hidden mx-auto'
					src={`${process.env.PUBLIC_URL}/pixabay.png`}
					alt='All pictures are from Pixabay'
				/>
			</a>
		</div>
	);
}

export default App;
