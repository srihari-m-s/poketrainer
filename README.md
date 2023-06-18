# poketrainer
A simple Front-end website that shows a Pokémon's type(s), stats, and some resources.
The website is built using **HTML, Tailwind CSS, JavaScript** and **React**. The Pokemon data is retrieved from PokeAPI. I built this project to learn retrieving data from a **REST API** and presenting it on a webpage. 
**[PokeAPI](https://pokeapi.co/)** has loads of data on pokemon. Every time a user selects a pokemon from the search box, the website retrieves data and presents. The website also uses information gathered from **Pokemon Database**. Please check out [pokemondb](https://pokemondb.net/) for extensive information on anything related to Pokemon. Have fun poking around.

## Components of the Project
The website has four major components.
1. Navigation
2. Pokemon Card
3. Type Chart
4. Natures

### 1. Navigation
A basic responsive navbar component that lets a user navigate the different pages on the website. The PokeTrainer name is linked to homepage (Pokemon Card). The highlight here is the Combobox component from headlessUI. Although it allows a user to search for a pokemon, I was unable to get the arrow keys to function for selecting the pokemon.

**React Router** is used to route to different pages.

### 2. Pokemon Card
This is a card that shows the pokemon id (not a pokedex number), pokemon name, the sprite, the type(s), and stats of the selected pokemon. On initial load the card, the selected pokemon defaults to pikachu(because it is probably the most famous). When a user searches and selects  a different pokemon, data is refetched and updated on the card. 

**React Query** and **Axios** is used to handle the fetch requests.

### 3. Type Chart
This page only renders a type chart image to the browser. The image is sourced from **[pokemondb](https://img.pokemondb.net/images/typechart.png)**. 

### 4. Natures
This page uses a HTML table to show information on pokemon natures and how they affect gameplay. the excerpt is also sourced from **[pokemondb](https://pokemondb.net/mechanics/natures)**. 
