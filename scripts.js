//this is an IIFE
let pokemonRepository = (function () {
    let pokemonList = [
        {name: 'Luxray', height: 4, types: ['Electric']},
        {name: 'Empoleon', height: 6, types: ['Water', 'Steel']},
        {name: 'Grimmsnarl', height: 5, types: ['Dark', 'Fairy']}
    ];

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = 'pokemon.name';
        button.classList.add('button-class');
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem
    }
})();

//Implemented a forEach loop rather than a for loop
pokemonRepository.getAll().forEach(function(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = 'pokemon.name';
    button.classList.add('button-class');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    // if (pokemon.height > 5) {
    //     document.write(pokemon.name + ' (height: ' + pokemon.height + ') - Wow, that\'\s big!<br>');
    // }
    // else {
    //     document.write(pokemon.name + ' (height: ' + pokemon.height + ')<br>' );
    // }
});

// for (let i = 0; i < pokemonList.length; i++) {
//     if (pokemonList[i].height > 5) {
//         document.write("<p>"+ pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - Wow, that\'\s big!' + "</p>" );
//     }
//     else {
//         document.write("<p>" + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') ' + "</p>");
//     }
// }