console.log('%cWelcome to Dad Jokes!', 'color: orange')

const jokePTag = document.querySelector('#joke')
const reloadButton = document.querySelector('#reload-joke-button')

getDadJoke()
.then(data => {
  const joke = data.joke
  jokePTag.innerText = joke
})
