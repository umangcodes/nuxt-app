function transformJoke(data) {
  return {
    category: data.category,
    id: data.id,
    safe: data.safe,
    joke: data.joke,
  }
}

export default {
  async loadJokes({ category, flag, amount, type }) {
    const url = `https://v2.jokeapi.dev/joke/${category}?blacklistFlags=${flag}&type=${type}&amount=${amount}`
    // console.log(url)
    const jokePromises = await (await fetch(url)).json()
    console.log(jokePromises)
    const jokes = jokePromises.jokes
    console.log(jokes)
    return jokes.map(transformJoke)
  },
}
