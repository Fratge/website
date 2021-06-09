import { starsCounter } from '../starsCounter.js'

describe('starsCounter', () => {
  it('should return the number of stars', () => {
    expect(starsCounter(10)).toEqual(10)
    expect(starsCounter(11)).toEqual(11)
  })

  it('should return emoji ⭐', () => {
    expect(starsCounter(3)).toEqual('⭐⭐⭐')
  })
})
