export default function Spinner({ show }) {
  return show ? <div className="spinner" data-cy="spinner"></div> : null
}
