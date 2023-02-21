const quoteText = document.querySelector('#quoteText')
const quoteAuthor = document.querySelector('#quoteAuthor')
const changeBtn = document.querySelector('#changeBtn')
const loading = document.querySelector('#loading')

const cursor = document.createElement('span')
cursor.textContent = '|'

const jokes = [
    function (resolve, reject) {
        const string = 'саша нубяра   '
        let newMessage = ''

        for (let i = 0; i < string.length; i++) {
            setTimeout(() => {
                newMessage = newMessage + string[i]
                quoteText.innerHTML = newMessage
                quoteText.append(cursor)

                if (i === string.length - 1) {
                    for (let i = 0; i < string.length; i++) {
                        setTimeout(() => {
                            newMessage = newMessage.slice(0, -1)
                            quoteText.innerHTML = newMessage
                            quoteText.append(cursor)

                            if (i === string.length - 1) {
                                resolve()
                            }
                        }, (i + 1) * 20)
                    }
                }
            }, (i + 1) * 70)
        }
    },
    function (resolve, reject) {
        const string = 'смотреть а4 бесплатно   '
        let newMessage = ''

        for (let i = 0; i < string.length; i++) {
            setTimeout(() => {
                newMessage = newMessage + string[i]
                quoteText.innerHTML = newMessage
                quoteText.append(cursor)

                if (i === string.length - 1) {
                    for (let i = 0; i < string.length; i++) {
                        setTimeout(() => {
                            newMessage = newMessage.slice(0, -1)
                            quoteText.innerHTML = newMessage
                            quoteText.append(cursor)

                            if (i === string.length - 1) {
                                resolve()
                            }
                        }, (i + 1) * 20)
                    }
                }
            }, (i + 1) * 70)
        }
    },
    function (resolve, reject) {
        const string = 'как соблазнить парня   '
        let newMessage = ''

        for (let i = 0; i < string.length; i++) {
            setTimeout(() => {
                newMessage = newMessage + string[i]
                quoteText.innerHTML = newMessage
                quoteText.append(cursor)

                if (i === string.length - 1) {
                    for (let i = 0; i < string.length; i++) {
                        setTimeout(() => {
                            newMessage = newMessage.slice(0, -1)
                            quoteText.innerHTML = newMessage
                            quoteText.append(cursor)

                            if (i === string.length - 1) {
                                resolve()
                            }
                        }, (i + 1) * 20)
                    }
                }
            }, (i + 1) * 70)
        }
    }
]

changeBtn.addEventListener('click', async (event) => {
    changeBtn.style.pointerEvents = 'none'
    changeBtn.style.opacity = '0.7'

    let newMessage = ''

    const arrayWithQuotes = await axios.get('https://type.fit/api/quotes')

    const quote = arrayWithQuotes.data[random(0, 1642)]

    quoteAuthor.innerHTML = ''

    const randomNum = random(1, 15)

    let p = null

    if (randomNum === 15) {
        const randomNum = random(0, 2)

        p = new Promise(jokes[randomNum])
    } else {
        p = new Promise(function (resolve, reject) {
            resolve()
        })
    }

    p.then(() => {
        for (let i = 0; i < quote.text.length; i++) {
            setTimeout(() => {
                
                newMessage = newMessage + quote.text[i]
                quoteText.innerHTML = newMessage
                quoteText.append(cursor)
    
                if (i === quote.text.length - 1) {
                    cursor.remove()
    
                    changeBtn.style.pointerEvents = 'auto'
                    changeBtn.style.opacity = '1'
                }
            }, (i + 1) * 50)
        }
    
        newMessage = ''
    })

    if (quote.author) {
        quoteAuthor.innerHTML = '@ ' + quote.author
        // quoteAuthor.style.display = 'none'
        // loading.style.display = 'block'
    } else {
        quoteAuthor.innerHTML = '@ Unknown'
    }
})

function random(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1) + min)
}