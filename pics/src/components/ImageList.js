import './ImageList.css';

import ImageShow from './ImageShow';

function ImageList({ imageList }){
	const renderedImageList = imageList.map((image) => {
		return <ImageShow url={ image.urls.small } key={ image.id } />
	});

	return(
		<div className="image-list">
			{ renderedImageList }
		</div>
	);
};

export default ImageList;