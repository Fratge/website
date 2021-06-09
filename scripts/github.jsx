import 'regenerator-runtime/runtime'
import React from 'react'
import { render } from 'react-dom'
import { starsCounter } from './functions/starsCounter.js'

function GitHub() {
  const [stars, setStars] = React.useState(0)
  React.useEffect(() => {
    async function fetchStars() {
      const response = await fetch(
        'https://api.github.com/repos/Fratge/website?page=1&per_page=100'
      )
      const data = await response.json()
      setStars(data.stargazers_count)
    }
    fetchStars()
  }, [])
  return <p>Nombres d'étoiles : {starsCounter(stars)}</p>
}

render(<GitHub />, document.getElementById('github'))
