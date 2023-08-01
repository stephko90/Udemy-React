import axios from 'axios';

const searchImages = async (searchTerm) => {
	let returnImages = [];
	const response = await axios.get('https://api.unsplash.com/search/photos', {
		headers: {
			Authorization : 'Client-ID PQ5wjzR_X3jlaWnKr-F7jtP_u1EcqnedpqUgOjE5LEY'
		},
		params: {
			query: searchTerm
		}
	});

	if (response.status === 200) {
		returnImages = response.data.results;
	}

	return returnImages;
}

export default searchImages;

// GET https://api.unsplash.com/search/photos?query=<QUERY>
// HEADER: Authorization: Client-ID PQ5wjzR_X3jlaWnKr-F7jtP_u1EcqnedpqUgOjE5LEY