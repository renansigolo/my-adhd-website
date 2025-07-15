type TitleProps = {
  children: string
}

export function Title({ children }: TitleProps) {
  return (
    <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
      {children}
    </h2>
  )
}
