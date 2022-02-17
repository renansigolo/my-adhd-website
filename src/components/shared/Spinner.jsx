export function Spinner({ show = false }) {
  return show ? <div className="spinner" data-test="spinner" /> : null
}
