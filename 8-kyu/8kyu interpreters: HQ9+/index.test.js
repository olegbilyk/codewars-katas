const hq9 = require('./index.js')

test('Test 1', () => {
  expect(hq9('H')).toBe('Hello World!')
})

test('Test 2', () => {
  expect(hq9('Q')).toBe('Q')
})
