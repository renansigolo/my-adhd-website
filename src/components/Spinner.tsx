export function Spinner({ show = false }) {
  return show ? (
    <div
      className="size-12 animate-spin rounded-full border-8 border-t-8 border-gray-200 border-t-pink-500"
      data-test="spinner"
    />
  ) : null
}
