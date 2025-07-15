type SubtitleProps = {
  children: string
}

export function Subtitle({ children }: SubtitleProps) {
  return <p className="mb-8 text-lg leading-6 text-gray-900">{children}</p>
}
