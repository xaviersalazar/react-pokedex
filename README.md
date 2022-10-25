# React Pokedex

Create an application in React with Tailwindcss that lists Pokemon pulled from the [PokeAPI](https://pokeapi.co/) and allows you to view some extra information about each one. 

## Features

- Fetch and show all Pokemon in a list card view. Each Pokemon card should include
    - Icon
    - ID
    - Name
    - Stats
    - Types
    - View More button

- The list should be paginated, with each page containing 30 Pokemon. Clicking on the next page should load and display the next 30 Pokemon. Similarly, clicking on the previous page should load back in and display the previous 30 Pokemon

- Clicking the `View More` button should bring a modal with extra details about the Pokemon. The details in this modal can be whatever else you want to include, but at a minimum should have
    - Abilities
    - All evolutions
    - Habitat
    - Height
    - Weight