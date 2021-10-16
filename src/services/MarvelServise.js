import axios from 'axios';
import characterMapping from '../mappings/character.mapping';

const URL = '/v1/public/characters';
const BASE_OFFSET = 210;

class MarvelService {
	static getAllCharacters = async (offset = BASE_OFFSET) => {
		const res = await axios.get(URL, {
			params: {
				offset,
				limit: 9,
			},
		})
		return res.results.map(characterMapping);
	}

	static getCharacter = async (id) => {
		const res = await axios.get(`${URL}/${id}`);
		return characterMapping(res.results[0]);
	}
}
export default MarvelService;
