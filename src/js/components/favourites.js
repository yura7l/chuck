class Favourites {
    action(item) {
        if (this.isInFavourites(item.id)) {
            this.remove(item.id)
        } else {
            this.add(item)
        }
    }

    isInFavourites(id) {
        let favourites = this.getFavourites()

        if (!favourites) {
            return false
        }

        for(let i = 0; i < favourites.length; i++) {
            if(favourites[i].id === id) {
                return true
            }
        }

        return false
    }

    getFavourites() {
        const favourites = localStorage.getItem('favourites')

        return JSON.parse(favourites)
    }

    add(item) {
        let favourites = this.getFavourites()

        if (!favourites) {
            favourites = []
        }

        favourites.push(item)
        localStorage.setItem('favourites', JSON.stringify(favourites))

        let element = document.querySelector(`[data-id="${item.id}"]`)
        element.querySelector('.jokes__item-heart').classList.add('active')
    }

    remove(id) {
        let favourites = this.getFavourites()

        for(let i = 0; i < favourites.length; i++){
            if (favourites[i].id === id) {
                favourites.splice(i, 1);
            }
        }
        localStorage.setItem('favourites', JSON.stringify(favourites))

        let element = document.querySelector(`[data-id="${id}"]`)
        element.querySelector('.jokes__item-heart').classList.remove('active')
    }
}

export default Favourites