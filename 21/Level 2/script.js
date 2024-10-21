//1
    const paragraphs = document.querySelectorAll('p')
    paragraphs.forEach((paragraph) => {
        const randomColorR = Math.floor(Math.random() * 256)
        const randomColorG = Math.floor(Math.random() * 256)
        const randomColorB = Math.floor(Math.random() * 256)

        paragraph.setAttribute('style', `color: rgb(${randomColorR}, ${randomColorG}, ${randomColorB})`)
        return paragraph
    })

//2
    paragraphs.forEach((paragraph, index) =>{
        if(index%2 == 0)
            paragraph.setAttribute('style', 'color: green')
        else
            paragraph.setAttribute('style', 'color: red')
        return paragraph
    })

//3
    let number = 4 
    paragraphs.forEach((paragraph) =>{
        paragraph.setAttribute('id', `p${number}`)
        paragraph.setAttribute('class', `text ${number}`)
        paragraph.textContent = `linia nr ${number}`
        number--;
    })