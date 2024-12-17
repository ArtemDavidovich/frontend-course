// нашли родителя для добавления карточек
const gridProducts = document.getElementById('grid-products')

// ! fetch запрос на .then

// fetch('https://fakestoreapi.com/products')
// .then(res => res.json())
// .then(data => {
// все операции с данными сервера будут происходить внутр второго then()
//     console.log(data)
//     data.map(product => {
//         const item = document.createElement('p')
//         item.textContent = product.title
//         document.body.append(item)
//     })
// })

// ! fetch запрос на async / await

// альтернативный популярный способ обработки асинхронных запросов в javascript
// под капотом работает так же как и then(), но визуально выглядит иначе

// перед объявлением асинхронной функции мы пишем слово async 

async function fetchProducts(){
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    data.map(product => {
        // создаем карточку с данными
        const card = document.createElement('div')
        card.classList.add('product-card')
        // создаем заголовок
        const heading = document.createElement('h4')
        heading.textContent = product.title
        // создаем картинку
        const img = document.createElement('img')
        img.src = product.image
        img.alt = product.title
        // создаем обертку для картинки
        const wrapper = document.createElement('div')
        wrapper.className = 'img-wrapper'
        wrapper.append(img)

        // создаем описание товара
        const desc = document.createElement('p')
        // обрезаем данный текст
        let descText = product.description
        if(descText.length > 200){
            desc.textContent = descText.slice(0, 200) + '...'
        } else {
            desc.content = product.description
        }
        
        // создаем цену товара
        const price = document.createElement('p')
        price.textContent = `Price: ${product.price}Є`


        // добавляем элементы к карточке в append()
        // в том порядке, в котором вы хотите их увидеть в контейнере
        card.append(heading, price, wrapper, desc)
        gridProducts.append(card)
        console.log(card)
    })
}

fetchProducts()

// * пример именной асинхронной стрелочной функции
//     const fetchProducts = async () => {
//     const res = await fetch('https://fakestoreapi.com/products')
//     const data = await res.json()
//     console.log(data)
// }

// * поскольку в стрелочных функциях мы кладем имя функции в константу, мы не можем вызывать функцию до инициализации переменной
// fetchProducts()

// ! повторяем fetch 

// fetch('https://fakestoreapi.com/products?limit=5')
// .then(res => res.json())
// .then(data => console.log(data))

async function fetchPractice(){
    const res = await fetch('https://fakestoreapi.com/products?limit=5')
    const data = await res.json()
    console.log(data)
}

fetchPractice()