require('jsdom-global')()
const assert = require('assert')
const viewport = require('./')

const notNaN = v => !isNaN(v)

describe('Bianco viewport', function() {
  it('scrollbarWidth is a number', function() {
    assert.equal(typeof viewport.scrollbarWidth(), 'number')
    assert.ok(notNaN(viewport.scrollbarWidth()))
  })

  it('documentHeight is a number', function() {
    assert.equal(typeof viewport.documentHeight(), 'number')
    assert.ok(notNaN(viewport.documentHeight()))
  })

  it('documentWidth is a number', function() {
    assert.equal(typeof viewport.documentWidth(), 'number')
    assert.ok(notNaN(viewport.documentWidth()))
  })

  it('scrollTop is a number', function() {
    assert.equal(typeof viewport.scrollTop(), 'number')
    assert.ok(notNaN(viewport.scrollTop()))
  })

  it('scrollLeft is a number', function() {
    assert.equal(typeof viewport.scrollLeft(), 'number')
    assert.ok(notNaN(viewport.scrollLeft()))
  })

  it('elementOffsetTop is a number', function() {
    const div = document.createElement('div')
    assert.equal(typeof viewport.elementOffsetTop(div), 'number')
    assert.ok(notNaN(viewport.elementOffsetTop(div)))
  })

  it('elementOffsetLeft is a number', function() {
    const div = document.createElement('div')
    assert.equal(typeof viewport.elementOffsetLeft(div), 'number')
    assert.ok(notNaN(viewport.elementOffsetLeft(div)))
  })
})