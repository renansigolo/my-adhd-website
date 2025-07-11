import toast from "react-hot-toast"

type ClassNamesProps = string | string[] | Record<string, boolean>
/**
 * @param {string[]} classes
 */
export function classNames(...classes: ClassNamesProps[]) {
  return classes.filter(Boolean).join(" ")
}

/** Show an error message in the console and triggers a toast */
export const showErrorMessage = (error: unknown): string => {
  let message: string

  if (error instanceof Error) {
    message = error.message
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message)
  } else if (typeof error === "string") {
    message = error
  } else {
    message = "Something went wrong"
  }

  console.error(message)
  toast.error(message)
  return message
}
