/* eslint-env jest */
import func from 'index'

test('should export hello function', () => {
  expect(typeof func).toBe('function')
  expect(func()).toBe('Hello!')
})
