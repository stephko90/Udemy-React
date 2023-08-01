import './ShowAnimal.css';

import { useState } from 'react';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import horse from './svg/horse.svg';
import heart from './svg/heart.svg';

const svgMap = {
	bird: bird,
	cat: cat,
	cow: cow,
	dog: dog,
	gator: gator,
	horse: horse
}

export default function ShowAnimal({ type }) {
	const [clicks, setClicks] = useState(0);

	const handleClick = () => {
		setClicks(clicks + 1);
	};
	return (
		<div className="animal-show" onClick={ handleClick }>
			<img className="animal" alt="animal" src={ svgMap[type] } />
			<img 
				className="heart"
				alt="heart" 
				src={ heart } 
				style={{ width: 10 + 10 * clicks }}/>
		</div>
	);
}