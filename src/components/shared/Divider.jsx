import { classNames } from "@/lib/helpers"

/**
 * Divider with optional label
 * @param {Object} props
 * @param {string=} props.width
 * @param {string=} props.text
 */
export function Divider({ width = "full", text }) {
  return (
    <div className="relative">
      {width && (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center"
        >
          <div
            className={classNames(
              width ? `w-${width}` : null,
              "border-t border-gray-300",
            )}
          />
        </div>
      )}

      {text && (
        <div className="relative flex justify-center">
          <span className="bg-white px-2 text-sm text-gray-500">{text}</span>
        </div>
      )}
    </div>
  )
}
