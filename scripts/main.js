import '@fontsource/limelight/400.css'
import '@fontsource/montserrat/400.css'
import '../styles/index.css'
import 'normalize.css'

const themeButton = document.getElementById('theme-button')
const body = document.querySelector('body')

themeButton.addEventListener('click', () => {
  let theme = body.className
  if (theme === 'dark') {
    theme = 'light'
  } else {
    theme = 'dark'
  }
  body.className = theme
  localStorage.setItem('theme', theme)
})

const theme = localStorage.getItem('theme') ?? 'dark'
body.className = theme
