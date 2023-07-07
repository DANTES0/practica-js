const quotesResponse = async() => {
    const response = await fetch("https://animechan.xyz/api/random/anime?title=Demon Slayer")
    const result = await response.json()
    console.log(result)
  }