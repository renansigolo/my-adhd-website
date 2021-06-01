export default function Spinner({ show }) {
  return show ? <div className="spinner" data-test="spinner"></div> : null
}
