let pokemonList = [
    {name: 'Empoleon', height: 6, types: ['water', 'steel']},
    {name: 'Luxray', height: 4, types: ['electric']},
    {name: 'Grimmsnarl', height: 5, types: ['dark', 'fairy']}
];

for (let i = 0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') ' );
}