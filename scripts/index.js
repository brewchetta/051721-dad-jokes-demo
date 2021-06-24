console.log('%cWelcome to Dad Jokes!', 'color: orange')

const jokePTag = document.querySelector('#joke')
const reloadButton = document.querySelector('#reload-joke-button')

reloadButton.addEventListener('click', getDadJoke)

getDadJoke()
