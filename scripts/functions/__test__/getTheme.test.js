import { getTheme } from '../getTheme.js'

describe('getTheme', () => {
  it('should return dark', () => {
    expect(getTheme('light')).toEqual('dark')
  })

  it('should return light', () => {
    expect(getTheme('dark')).toEqual('light')
  })
})
