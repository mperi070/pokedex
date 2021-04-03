let pokemonList = [
    {name: 'Luxray', height: 4, types: ['electric']},
    {name: 'Empoleon', height: 6, types: ['water', 'steel']},
    {name: 'Grimmsnarl', height: 5, types: ['dark', 'fairy']}
];

for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 5) {
        document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - Wow, that is big! ' );
    }
    else {
        document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') ' );
    }
}