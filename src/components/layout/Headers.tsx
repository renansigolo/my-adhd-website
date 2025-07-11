import { HomeIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { ReactNode } from "react"
import { FormattedMessage } from "react-intl"

type HeaderPageProps = {
  id: string
  title: string
  subTitle?: string
  children?: ReactNode | null
}
export const HeaderPage = ({
  id,
  title,
  subTitle,
  children = null,
}: HeaderPageProps) => {
  return (
    <>
      {/* Section Header */}
      {(id || title || subTitle) && (
        <HeaderSection id={id} subTitle={subTitle} title={title} />
      )}

      {/* Section Content */}
      {children}
    </>
  )
}

export const HeaderButton = () => {
  return (
    <div className="mb-12 text-left lg:mb-24">
      <Link href="/">
        <div className="sticky top-8 inline-flex items-center rounded-full border border-transparent bg-pink-600 p-3 text-white shadow-xs hover:bg-pink-700 focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:outline-hidden">
          <HomeIcon aria-hidden="true" className="size-6" />
        </div>
      </Link>
    </div>
  )
}

type HeaderSectionProps = {
  id: string
  title: string
  subTitle?: string
}
export const HeaderSection = ({ id, title, subTitle }: HeaderSectionProps) => {
  return (
    <>
      {title && (
        <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          <span className="block">
            <FormattedMessage defaultMessage={title} id={`${id}.title`} />
          </span>
        </h2>
      )}

      {subTitle && (
        <p className="mb-8 text-lg leading-6 text-gray-900">
          <FormattedMessage defaultMessage={subTitle} id={`${id}.subtitle`} />
        </p>
      )}
    </>
  )
}
