import { primeMedians, getMedians} from "../helpers/prime_medians.js"

describe('Testing the getMedians function', () => {
  test('even length array returns array with 2 values', () => {
    expect(getMedians([2, 3, 5, 7])).toEqual([3 , 5])
  })

  test('odd length array returns array with one value', () => {
    expect(getMedians([2,3,5,7,11])).toEqual([5])
  })
})

describe("Testing the primeMedians function ", () => {
  test("testing when 2 numbers returned", () => {
    expect(primeMedians(20)).toEqual([7, 11])
  })

  test("testing when 1 numbers returned", () => {
    expect(primeMedians(50)).toEqual([19])
  })
})
