/**
 * @param {Function} func
 * @param {number} wait
 * @returns {Function}
 */

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

export default debounce;
