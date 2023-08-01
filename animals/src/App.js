import './App.css';

import { useState } from 'react';
import ShowAnimal from './ShowAnimal';

const globalAnimals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

function getRandomAnimal() {
	const animal = globalAnimals[Math.floor(Math.random() * globalAnimals.length)];
	globalAnimals.splice(globalAnimals.indexOf(animal), 1);
	return animal;
}

export default function App() {
	const [animals, setAnimals] = useState([]);

	const handleClick = () => {
		if (globalAnimals.length > 0) {
			setAnimals([...animals, getRandomAnimal()]);
		}	
	};

	const renderedAnimals = animals.map((animal, index) => {
		return <ShowAnimal type={ animal } key={ index } />
	});

	return (
		<div className="app">
			<button onClick={ handleClick }>Add Animal</button>
			<div className="animal-list">{ renderedAnimals }</div>
		</div>
	);
}