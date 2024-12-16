
const body = document.querySelector('body')

fetch("https://rickandmortyapi.com/api/character")    
    .then(res => res.json())
    .then(data => { 
        const characters = data.results.map(character => ({
            imgChar: character.image,
            nameChar: character.name,
            originChar: character.location.name,
            statusChar: character.status
        }))        

        characters.forEach((element, index) => {
            const div = document.createElement('div')
            div.classList.add('character-info')
            const img = document.createElement('img')
            //img.id = index + 1
            const divText = document.createElement('div')
            divText.classList.add('character-text')
            const charName = document.createElement('h3')
            const charOrigin = document.createElement('h3')
            const charStatus = document.createElement('h3')

            body.append(div)
            div.append(img, divText)
            divText.append(charName, charOrigin, charStatus)

            img.alt = element.nameChar
            img.src = element.imgChar
            charName.innerText = element.nameChar
            charOrigin.innerText = element.originChar
            charStatus.innerText = element.statusChar
        });
        
        console.log(characters)

        // img.src = data.results[1].image,
        // nameMorty.textContent = 'Name: ' + data.results[1].name
        // statusMorty.textContent = 'Status: ' + data.results[1].status
        // originMorty.textContent = 'Origin: ' + data.results[1].location.name
    })

    
    