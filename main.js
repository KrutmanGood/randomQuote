const quoteText = document.querySelector('#quoteText')
const quoteAuthor = document.querySelector('#quoteAuthor')
const changeBtn = document.querySelector('#changeBtn')

const cursor = document.createElement('span')
cursor.textContent = '|'

let newMessage = ''
let flag = false

changeBtn.addEventListener('click', async (event) => {
    if (!flag) {
        flag = true

        const arrayWithQuotes = await axios.get('https://type.fit/api/quotes')

        const quote = arrayWithQuotes.data[random(0, 1642)]

        for (let i = 0; i < quote.text.length; i++) {
            setTimeout(() => {
                newMessage = newMessage + quote.text[i]
                quoteText.innerHTML = newMessage
                quoteText.append(cursor)
            }, (i + 1) * 50)
        }

        newMessage = ''

        if (quote.author) {
            quoteAuthor.innerHTML = '@ ' + quote.author
        } else {
            quoteAuthor.innerHTML = '@ Unknown'
        }

        flag = false
    }
})

function random(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min) + min) 
}

function test() {
    quoteText.className = ''
}