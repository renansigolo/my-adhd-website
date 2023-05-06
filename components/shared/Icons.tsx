import logoOutline from "@/images/logos/logo-outline-with-brand-side.svg"
import logoBrandUnder from "@/images/logos/logo-outline-with-brand-underneath.svg"
import logoSquare from "@/images/logos/logo-square.svg"
import logo from "@/images/logos/logo.svg"
import Image from "next/image"

export const LogoOutlinedWithBrandUnderneath = () => {
  return (
    <Image
      alt="My ADHD Logo"
      className="flex-self-center mb-2 inline-block max-h-36 md:max-h-48"
      height={430}
      loading="eager"
      src={logoBrandUnder}
      width={385}
    />
  )
}

export const LogoOutlinedWithBrandSide = () => {
  return (
    <Image
      alt="My ADHD Logo"
      className="hidden h-8 w-auto lg:block"
      loading="eager"
      src={logoOutline}
    />
  )
}

export const Logo = ({ height = 8 }) => {
  return (
    <Image
      alt="My ADHD Logo"
      className={`block h-${height} w-auto`}
      loading="eager"
      src={logo}
    />
  )
}

export const AppIconSquare = () => {
  return (
    <Image
      alt="My ADHD Logo"
      className="flex-self-center inline-flex h-40 w-40"
      height={160}
      loading="eager"
      src={logoSquare}
      width={160}
    />
  )
}
