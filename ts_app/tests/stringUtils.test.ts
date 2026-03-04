
import { describe, it, expect } from 'vitest'
import { isPalindrome } from '../src/stringUtils'

// TODO: completa los casos: "radar"->true, "anita lava la tina"->true, "python"->false, ""->true, "Radar"->true

describe('radar palindromo', () => {
  it('should return true', () => {
    expect(isPalindrome('radar')).toBe(true)
  })
})

describe('Radar palindromo', () => {
  it('should return true', () => {
    expect(isPalindrome('Radar')).toBe(true)
  })
})

describe('anita palindromo', () => {
  it('should return true', () => {
    expect(isPalindrome('anita lava la tina')).toBe(true)
  })
})

describe('python palindromo', () => {
  it('should return false', () => {
    expect(isPalindrome('python')).toBe(false)
  })
})

describe('empty palindromo', () => {
  it('should return true', () => {
    expect(isPalindrome(' ')).toBe(true)
  })
})