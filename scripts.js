let pokemonRepository = (function () {
    let pokemonList = [
        {name: 'Luxray', height: 4, types: ['electric']},
        {name: 'Empoleon', height: 6, types: ['water', 'steel']},
        {name: 'Grimmsnarl', height: 5, types: ['dark', 'fairy']}
    ];

    function getAll () {
        return pokemonList;
    }
}) ();



// for (let i = 0; i < pokemonList.length; i++) {
//     if (pokemonList[i].height > 5) {
//         document.write("<p>"+ pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - Wow, that\'\s big!' + "</p>" );
//     }
//     else {
//         document.write("<p>" + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') ' + "</p>");
//     }
// }

//Implemented a forEach loop rather than a for loop
pokemonList.forEach(function(pokemon) {
    if (pokemon.height > 5) {
        document.write(pokemon.name + ' (height: ' + pokemon.height + ') - Wow, that\'\s big!<br>');
    }
    else {
        document.write(pokemon.name + ' (height: ' + pokemon.height + ')<br>' );
    }
});