class Favourites {
    action(id) {
        if (this.isInFavourites(id)) {
            this.remove(id)
        } else {
            this.add(id)
        }
    }

    isInFavourites(id) {
        let favourites = this.getFavourites()

        if (!favourites) {
            return false
        }

        for(let i = 0; i < favourites.length; i++) {
            if(favourites[i] === id) {
                return true
            }
        }

        return false
    }

    getFavourites() {
        const favourites = localStorage.getItem('favourites')

        return JSON.parse(favourites)
    }

    add(id) {
        let favourites = this.getFavourites()

        if (!favourites) {
            favourites = []
        }

        favourites.push(id)
        localStorage.setItem('favourites', JSON.stringify(favourites))

        let item = document.querySelector(`[data-id="${id}"]`)
        item.querySelector('.jokes__item-heart').classList.add('active')
    }

    remove(id) {
        let favourites = this.getFavourites()

        for(let i = 0; i < favourites.length; i++){
            if (favourites[i] === id) {
                favourites.splice(i, 1);
            }
        }
        localStorage.setItem('favourites', JSON.stringify(favourites))

        let item = document.querySelector(`[data-id="${id}"]`)
        item.querySelector('.jokes__item-heart').classList.remove('active')
    }
}

export default Favourites