import { classNames } from "@/lib/helpers"

type DividerProps = {
  width?: "full" | "3/4" | "1/2" | "1/4"
  text?: string
}

export function Divider({ width = "full", text }: DividerProps) {
  return (
    <div className="relative">
      {width && (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center"
        >
          <div
            className={classNames(
              width ? `w-${width}` : "",
              "border-t border-gray-300"
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
