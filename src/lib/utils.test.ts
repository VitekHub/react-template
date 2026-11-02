import { cn } from './utils'

describe('cn', () => {
  it('joins class names', () => {
    expect(cn('px-2', 'py-1')).toBe('px-2 py-1')
  })

  it('merges conflicting Tailwind classes', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4')
  })

  it('handles conditional values', () => {
    expect(cn('base', { hidden: false, active: true })).toBe('base active')
  })
})
