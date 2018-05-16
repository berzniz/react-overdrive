/* global describe, it, expect */

import prefix from '../src/prefix'

describe('prefix', () => {
  it('should return an object on empty input', () => {
    expect(prefix()).toEqual({})
    expect(prefix(null)).toEqual({})
    expect(prefix({})).toEqual({})
  })

  it('should add webkit prefix to correct properties', () => {
    expect(prefix({
      width: '50px',
      transform: 1,
      transformOrigin: 2,
      transition: 3
    })).toEqual({
      width: '50px',
      WebkitTransform: 1,
      WebkitTransformOrigin: 2,
      WebkitTransition: 3,
      transform: 1,
      transformOrigin: 2,
      transition: 3
    })
  })
})
