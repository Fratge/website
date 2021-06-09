import { getTheme } from './functions/getTheme'

const themeButton = document.getElementById('theme-button')
const body = document.querySelector('body')

themeButton.addEventListener('click', () => {
  const theme = getTheme(body.className)
  body.className = theme
  localStorage.setItem('theme', theme)
})

const theme = localStorage.getItem('theme') ?? 'dark'
body.className = theme
