import axios from "axios";

class Categories {
    async render() {
        try {
            const categories = (await axios.get(`https://api.chucknorris.io/jokes/categories`)).data

            if (categories) {
                const parent = document.querySelector('.categories')

                categories.forEach((cat, i) => {
                    let input = document.createElement('input')
                    input.type = 'radio'
                    input.id = cat
                    input.name = 'categories'
                    input.value = cat

                    if (i === 0) {
                        input.checked = 'checked'
                    }

                    parent.appendChild(input)

                    let label = document.createElement('label')
                    label.setAttribute('for', cat)
                    label.innerHTML = cat
                    label.classList.add('categories__item')
                    parent.appendChild(label)
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export default Categories