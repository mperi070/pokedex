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
        button.innerText = pokemon.name;
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
  pokemonRepository.addListItem(pokemon);
});
