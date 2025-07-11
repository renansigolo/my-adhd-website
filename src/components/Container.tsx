import { classNames } from "@/lib/helpers"
import { ReactNode } from "react"

type ContainerProps = {
  children: ReactNode
  center?: boolean
}

export const Container = ({ children, center = false }: ContainerProps) => {
  return (
    <div
      className={classNames(
        center ? "text-center" : "",
        "mx-auto max-w-xl px-4 py-12 sm:px-6 md:max-w-7xl lg:px-8 lg:py-24",
      )}
    >
      {children}
    </div>
  )
}
