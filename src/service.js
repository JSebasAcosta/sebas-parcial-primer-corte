class RickAndMortyService {
    constructor() {
        this.baseUrl = 'https://rickandmortyapi.com/api/character';
    }
    
    getAllCharacters() {
        return fetch(this.baseUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const characters = data.results.map(character => ({
                    name: character.name,
                    status: character.status,
                    species: character.species,
                    firstSeen: character.origin.name,
                    location: character.location.name,
                    image: character.image,
                    student: "Juan Sebastian Acosta",
                    code: "0000214188"
                }));
                return characters;
            })
            .catch(error => {
                console.error('Error fetching data from API:', error);
                throw error;
            });
    }
}

export default RickAndMortyService;


const service=new RickAndMortyService();
service.getAllCharacters()
.then(characters=>{console.log(characters)});