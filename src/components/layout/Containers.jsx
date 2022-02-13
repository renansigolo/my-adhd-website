import { classNames } from "@/lib/helpers"

export const ContainerSection = ({ children, center = false }) => {
  return (
    <div
      className={classNames(
        center && "text-center",
        "mx-auto max-w-xl px-4 py-12 sm:px-6 md:max-w-7xl lg:py-24 lg:px-8"
      )}
    >
      {children}
    </div>
  )
}
