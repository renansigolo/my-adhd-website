export const LogoOutlinedWithBrandUnderneath = () => {
  return (
    <img
      alt="My ADHD Logo"
      className="flex-self-center mb-2 inline-block max-h-36 md:max-h-48"
      height={430}
      loading="eager"
      src="/images/logos/logo-outline-with-brand-underneath.svg"
      width={385}
    />
  )
}

export const LogoOutlinedWithBrandSide = () => {
  return (
    <img
      alt="My ADHD Logo"
      className="hidden h-8 w-auto lg:block"
      loading="eager"
      src="/images/logos/logo-outline-with-brand-side.svg"
    />
  )
}

export const Logo = ({ height = 8 }) => {
  return (
    <img
      alt="My ADHD Logo"
      className={`block h-${height} w-auto`}
      loading="eager"
      src="/images/logos/logo.svg"
    />
  )
}

export const AppIconSquare = () => {
  return (
    <img
      alt="My ADHD Logo"
      className="flex-self-center inline-flex h-40 w-40"
      height={160}
      loading="eager"
      src="/images/logos/logo-square.svg"
      width={160}
    />
  )
}
