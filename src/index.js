// import Bootstrap
import 'bootstrap';

// import template styles
import './scss/main.scss'

import Categories from './js/components/categories'
const categories = new Categories()
categories.render()

import Jokes from "./js/components/jokes";
const jokes = new Jokes()

const button = document.querySelector('.get-joke')
button.addEventListener('click', (e) => {
    e.preventDefault()

    let type = document.querySelector('input[name=filter]:checked').value

    if (type === 'random') {
        jokes.random()
    } else if (type === 'categories') {
        let category = document.querySelector('input[name=categories]:checked').value

        jokes.category(category)

    } else if (type === 'search') {
        let query = document.querySelector('#searchInput').value

        jokes.search(query)
    }
})

jokes.renderFavourites()