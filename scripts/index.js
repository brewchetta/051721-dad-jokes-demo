console.log('%cWelcome to Dad Jokes!', 'color: orange')

const jokePTag = document.querySelector('#joke')
const reloadButton = document.querySelector('#reload-joke-button')
const likeButton = document.querySelector('#like-button')
const likedJokesContainer = document.querySelector('#liked-jokes')

let currentJoke = {}
const likedJokes = []

function saveJoke() {
  if (!likedJokes.includes(currentJoke)) {
    likedJokes.push(currentJoke)
    const li = document.createElement('li')
    li.innerText = currentJoke.joke
    likedJokesContainer.append(li)
    li.addEventListener('click', event => removeJoke(event))
  } else {
    alert('You already have that joke!')
  }
}

function removeJoke(event) {
  event.target.remove()
}

reloadButton.addEventListener('click', getDadJoke)

getDadJoke()

likeButton.addEventListener('click', saveJoke)
