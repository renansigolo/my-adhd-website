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
        "container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-24",
      )}
    >
      {children}
    </div>
  )
}
