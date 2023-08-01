import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';
import { useState } from 'react';

export default function App() {
	const [imageList, setImageList] = useState([]);
	const handleSubmit = async (term) => {
		const result = await searchImages(term);
		// setImageList(result.map((image, index) => {
		// 	return image.urls.raw;
		// }));
		console.log(result);
		setImageList(result);
	};

	return (
		<div>
			<SearchBar onSubmit={ handleSubmit }/>
			<ImageList imageList={ imageList } />
		</div>
	);
}