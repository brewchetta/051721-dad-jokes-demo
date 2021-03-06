// dad jokes api
const URL = 'https://icanhazdadjoke.com/'

function getDadJoke() {
  return fetch(URL, {
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {
    currentJoke = data
    const joke = data.joke
    jokePTag.innerText = joke
  })
}

function postDadJoke(body) {
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json'
    },
    body: JSON.stringify(body)
  })
  .then(res => res.json())
}
