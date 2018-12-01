# bianco.viewport

[![Build Status][travis-image]][travis-url]

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]

## Usage

```js
import viewport from 'bianco.viewport'

// get the current scroll top position
const offsetTop = viewport.scrollTop()
```

[travis-image]: https://img.shields.io/travis/biancojs/viewport.svg?style=flat-square

[travis-url]: https://travis-ci.org/biancojs/viewport

[license-image]: http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square

[license-url]: LICENSE.txt

[npm-version-image]: http://img.shields.io/npm/v/bianco.viewport.svg?style=flat-square

[npm-downloads-image]: http://img.shields.io/npm/dm/bianco.viewport.svg?style=flat-square

[npm-url]: https://npmjs.org/package/bianco.viewport

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [scrollbarWidth](#scrollbarwidth)
-   [documentHeight](#documentheight)
-   [documentWidth](#documentwidth)
-   [scrollTop](#scrolltop)
-   [scrollLeft](#scrollleft)
-   [elementOffsetTop](#elementoffsettop)
    -   [Parameters](#parameters)
-   [elementOffsetLeft](#elementoffsetleft)
    -   [Parameters](#parameters-1)

### scrollbarWidth

Return the size of the scrollbar that depends on the browser or device used on the client

Returns **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** the browser scrollbar width

### documentHeight

Get the height of the whole page

Returns **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** height in px of the document

### documentWidth

Get the width of the whole page

Returns **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** width in px of the document

### scrollTop

Return amount of px scrolled from the top of the document

Returns **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** scroll top value in px

### scrollLeft

Return amount of px scrolled from the left of the document

Returns **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** scroll left value in px

### elementOffsetTop

Get the offset top of any DOM element

#### Parameters

-   `el` **[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)** the element we need to check

Returns **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** the element y position in px

### elementOffsetLeft

Get the offset left of any DOM element

#### Parameters

-   `el` **[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)** the element we need to check

Returns **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** the element x position in px
