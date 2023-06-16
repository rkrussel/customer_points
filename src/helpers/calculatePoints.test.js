import { calculatePoints } from './calculatePoints'

describe('Calculate Points', () => {
  it('returns "0" if the given value is lesss than or equal to 50', () => {
    expect(calculatePoints('0')).toEqual(0)
    expect(calculatePoints('1')).toEqual(0)
    expect(calculatePoints('10')).toEqual(0)
    expect(calculatePoints('20')).toEqual(0)
    expect(calculatePoints('30')).toEqual(0)
    expect(calculatePoints('40')).toEqual(0)
    expect(calculatePoints('50')).toEqual(0)
  })

  it('returns 1 for each value between 51 - 100', () => {
    for (let i = 51; i <= 100; i++) {
      expect(calculatePoints(i.toString())).toEqual(i - 50)
    }
  })

  it('returns 1 for each value between 51 -100', () => {
    for (let i = 51; i <= 100; i++) {
      expect(calculatePoints(i.toString())).toEqual(i - 50)
    }
  })

  it('returns an additional 2 for each value over 100', () => {
    for (let i = 101; i <= 300; i++) {
      expect(calculatePoints(i.toString())).toEqual((i - 100) * 2 + 50)
    }
  })
})
