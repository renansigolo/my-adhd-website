/** Display a development tag to identify the current environment being used */
export function EnvironmentTag() {
  if (process.env.NODE_ENV === "production") return null

  return (
    <div className="fixed bottom-5 left-5">
      <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-0.5 text-sm font-medium text-purple-800 opacity-70">
        {process.env.NODE_ENV.toUpperCase()}
      </span>
    </div>
  )
}
