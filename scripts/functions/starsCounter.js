export function starsCounter(stars) {
  if (stars >= 10) {
    return stars
  }
  let emojiStars = ''
  for (let index = 0; index < stars; index++) {
    emojiStars += '⭐'
  }
  return emojiStars
}
