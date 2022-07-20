
//Is provided, via props, an array of objects describing different pokemon,
// and renders a sequence of Pokecard components.

//Use the defaultProps feature of Pokedex to provide a default list of Pokemon characters to show.
// You can use this list for a good set of defaults:

const pokemons = [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62, img_url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63 , img_url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72 , img_url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 , img_url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112, img_url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95, img_url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225 , img_url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65, img_url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"},
];

export default pokemons; //export the pokedex array