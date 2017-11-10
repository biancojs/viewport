const doc = document
const win = window
const body = doc.body
const html = doc.documentElement
const ZERO = 0

/**
 * Simple function convert in boolean any value and return true if its value was truthy
 * @private
 * @param   {*} v - anything
 * @returns { Boolean } true if truthy
 */
const isTruthy = v => !!v

/**
 * Get the max value from a list of arguments filtering the falsy values
 * @private
 * @param   {...Number} args - list of numbers
 * @returns { Number } the highest value
 */
const max = (...args) => Math.max(ZERO, ...args.filter(isTruthy), ZERO)

/**
 * Return the size of the scrollbar that depends on the browser or device used on the client
 * @returns { Number } - the browser scrollbar width
 */
export function scrollbarWidth() {
  // Create the measurement node
  const div = doc.createElement('div')
  Object.assign(div.style, {
    width: '100px',
    height: '100px',
    overflow: 'scroll',
    position: 'fixed',
    opacity: '0'
  })

  doc.body.appendChild(div)
  // Read values
  const { offsetWidth, clientWidth } = div
  // Delete helper element
  doc.body.removeChild(div)

  return max(offsetWidth - clientWidth)
}

/**
 * Get the height of the whole page
 * @returns { Number } height in px of the document
 */
export function documentHeight() {
  return max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  )
}

/**
 * Get the width of the whole page
 * @returns { Number } width in px of the document
 */
export function documentWidth() {
  return max(
    body.scrollWidth,
    body.offsetWidth,
    html.clientWidth,
    html.scrollWidth,
    html.offsetWidth
  )
}

/**
 * Return amount of px scrolled from the top of the document
 * @returns { Number } scroll top value in px
 */
export function scrollTop() {
  return max(
    win.scrollY,
    win.pageYOffset,
    doc.documentElement.scrollTop
  )
}

/**
 * Return amount of px scrolled from the top of the document
 * @returns { Number } scroll left value in px
 */
export function scrollLeft() {
  return max(
    win.scrollX,
    win.pageXOffset,
    doc.documentElement.scrollLeft
  )
}


/**
 * Get the offset top of any DOM element
 * @param { HTMLElement } el - the element we need to check
 * @returns { Number } the element y position in px
 */
export function elementOffsetTop(el) {
  return max(scrollTop() + el.getBoundingClientRect().top)
}