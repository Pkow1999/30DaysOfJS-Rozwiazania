//1
    const firstParagraph = document.querySelector('p')
    console.log(firstParagraph)
//2
    const firstParagraphAGAIN = document.querySelector('#p1')
    const secondParagraph = document.querySelector('#p2')
    const thirdParagraph = document.querySelector('#p3')
    const fourthParagraph = document.querySelector('#p4')
    console.log(firstParagraphAGAIN, secondParagraph, thirdParagraph, fourthParagraph);
//3
    const allParagraphs = document.querySelectorAll('p')
    console.log(allParagraphs);
//4
    allParagraphs.forEach((paragraph) => console.log(paragraph.textContent))
//5
    fourthParagraph.textContent = 'Fourth Paragraph'
    allParagraphs.item(3).textContent = 'Fourt Paragraph AGAIN'
//6
    let number = 0;
    allParagraphs.forEach((paragraph) => {
        paragraph.id = number
        paragraph.setAttribute('class', `text ${number}`)
        number++;
        return paragraph
    })