// page heading
const homework = document.createElement('h1')
homework.textContent = 'Homework 19: Fetch Practice 💡'

// div-container (grid) for products' cards
const gridGallery = document.createElement('div')
gridGallery.className = 'grid-gallery'

document.body.append(homework, gridGallery)

async function fetchProducts(){   
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()
    data.products.map(product => {
        // div for product's card
        const divCard = document.createElement('div')
        divCard.classList.add('div-card')

        //product's title
        const titleProd = document.createElement('h3')
        titleProd.textContent = product.title
        
        // product's image
        const imgProd = document.createElement('img')
        imgProd.alt = product.title
        imgProd.src = product.images[0]
        const imgWrapper = document.createElement('div')
        imgWrapper.className = 'img-wrapper'

        // product's price
        const priceProd = document.createElement('h4')
        priceProd.textContent = `Price: ${product.price}$`

        // product's description
        const descrProd = document.createElement('p')
        descrProd.textContent = product.description
        
        imgWrapper.append(imgProd)

        divCard.append(titleProd, imgWrapper, priceProd, descrProd)

        gridGallery.append(divCard)

        console.log(divCard)
    })   
}

fetchProducts()