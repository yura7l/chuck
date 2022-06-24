import axios from "axios";

import Favourites from "../components/favourites";
const favourites = new Favourites()

class Jokes {
    async random () {
        try {
            const joke = (await axios.get(`https://api.chucknorris.io/jokes/random`)).data
            const parent = document.querySelector('#jokes')

            if (joke) {
                this.render(joke, parent)
            }
        } catch (error) {
            this.error()
        }
    }

    async category(cat) {
        try {
            const joke = (await axios.get(`https://api.chucknorris.io/jokes/random?category=${cat}`)).data
            const parent = document.querySelector('#jokes')

            if (joke) {
                this.render(joke, parent)
            }
        } catch (error) {
            this.error()
        }
    }

    async search(query) {
        try {
            const jokes = (await axios.get(`https://api.chucknorris.io/jokes/search?query=${query}`)).data.result
            const parent = document.querySelector('#jokes')

            if (jokes.length) {
                jokes.forEach(joke => {
                    this.render(joke, parent)
                })
            } else {
                this.empty()
            }
        } catch (error) {
            this.error()
        }
    }

    render(data, parent) {
        // Main container
        let item = document.createElement('div')
        item.classList.add('jokes__item')
        item.setAttribute('data-id', data.id)

        // Heart
        let heart = document.createElement('a')
        heart.href = 'javascript:void(0);'
        heart.classList.add('jokes__item-heart')
        heart.onclick = function () {
            favourites.action(data)
        };
        if (favourites.isInFavourites(data.id)) {
            heart.classList.add('active')
        }
        item.appendChild(heart)

        // Grid
        let grid = document.createElement('div')
        grid.classList.add('jokes__item-grid')
        item.appendChild(grid)

        // Info
        let info = document.createElement('div')
        info.classList.add('jokes__item-info')
        grid.appendChild(info)

        // Link
        let link = document.createElement('a')
        link.href = data.url
        link.target = '_blank'
        link.classList.add('jokes__item-link')
        link.innerHTML = data.id

        // ID
        let id = document.createElement('div')
        id.classList.add('jokes__item-id')
        id.innerHTML = 'ID: '
        id.appendChild(link)
        info.appendChild(id)

        // Body
        let body = document.createElement('div')
        body.classList.add('jokes__item-body')
        body.innerHTML = data.value
        info.appendChild(body)

        // Footer
        let footer = document.createElement('div')
        footer.classList.add('jokes__item-footer')

        // Date
        let date = document.createElement('div')
        date.classList.add('jokes__item-date')
        date.innerHTML = `Last update: <span>${data.created_at}</span>`
        footer.appendChild(date)

        // Category
        if (data.categories.length) {
            let category = document.createElement('div')
            category.classList.add('jokes__item-category')
            category.innerHTML = data.categories[0]
            footer.appendChild(category)
        }
        grid.appendChild(footer)

        parent.appendChild(item)
    }

    empty() {
        const parent = document.querySelector('#jokes')

        let p = document.createElement('p')
        p.innerHTML = 'Nothing found'
        parent.appendChild(p)
    }

    error() {
        const parent = document.querySelector('#jokes')

        let p = document.createElement('p')
        p.innerHTML = 'Oops, something went wrong'
        parent.appendChild(p)
    }

    renderFavourites() {
        const saved = favourites.getFavourites()
        const parent = document.querySelector('.jokes--favourite')

        if (saved && saved.length) {
            saved.forEach(item => {
                this.render(item, parent)
            })
        }
    }
}

export default Jokes