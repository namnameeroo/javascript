/**
 * @param {Function} func
 * @param {number} wait
 * @returns {Function}
 */

function throttle(func, wait) {
  let lastCallTime = 0;
  return function (...args) {
    const context = this;
    const now = new Date().now();

    if (now - lastCallTime < wait) return;
    lastCallTime = now;
    func.apply(context, args);
  };
}

export default throttle;
