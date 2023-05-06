/**
 * @param {string[]} classes
 */
export function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}
