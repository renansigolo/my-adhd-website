import {
  faChalkboardTeacher,
  faGrinStars,
  faStethoscope
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { FormattedMessage } from "react-intl"

const cards = [
  {
    icon: faStethoscope,
    title: "features.card.title",
    subtitle: "features.card.description"
  },
  {
    icon: faChalkboardTeacher,
    title: "features.card.title",
    subtitle: "features.card.description"
  },
  {
    icon: faGrinStars,
    title: "features.card.title",
    subtitle: "features.card.description"
  }
]

function FeatureHighlights() {
  return (
    <div className="my-24 mx-auto max-w-7xl px-4">
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {cards.map((card, index) => (
          <li
            key={card.title + (index + 1)}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-gradient-to-tr from-purple-800 to-pink-600 text-center shadow"
          >
            <div className="flex flex-1 flex-col p-8 text-white">
              <FontAwesomeIcon
                icon={card.icon}
                size="4x"
                className="mx-auto flex-shrink-0"
              />
              <h3 className="mt-6 text-lg font-medium">
                <FormattedMessage id={card.title + (index + 1)} />
              </h3>
              <dl className="mt-1flex-grow flex flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-sm">
                  <FormattedMessage id={card.subtitle + (index + 1)} />
                </dd>
              </dl>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function BulletsMobile() {
  return (
    <>
      <svg
        className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
        width={784}
        height={404}
        fill="none"
        viewBox="0 0 784 404"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect
              x={0}
              y={0}
              width={4}
              height={4}
              className="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width={784}
          height={404}
          fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
        />
      </svg>
    </>
  )
}

function Bullets(props) {
  // Adjust the classed to match the side of the screen
  const left = "right-full translate-x-1/2 translate-y-12"
  const right = "left-full -translate-x-1/2 -translate-y-1/4"
  const screenPosition = props.position === "left" ? left : right

  return (
    <>
      <svg
        className={`absolute hidden transform lg:block ${screenPosition}`}
        width={404}
        height={784}
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect
              x={0}
              y={0}
              width={4}
              height={4}
              className="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width={404}
          height={784}
          fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
        />
      </svg>
    </>
  )
}

export default function Features() {
  return (
    <section id="features">
      <div className="overflow-hidden bg-gray-50 py-12 lg:py-24">
        <div className="relative mx-auto max-w-xl px-4 sm:px-6 md:max-w-7xl lg:px-8">
          <Bullets position="right" />

          {/* Highlight 0 */}
          <div className="relative mt-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="relative px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-extrabold tracking-tight text-purple-900 sm:text-3xl">
                <FormattedMessage id="highlight.0.title" />
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                <FormattedMessage id="highlight.0.subtitle" />
              </p>
            </div>

            <div
              className="relative -mx-4 mt-10 text-center lg:mt-0"
              aria-hidden="true"
            >
              <BulletsMobile />
              <Image
                className="relative mx-auto"
                src="/images/highlight/learn.webp"
                alt="iPhone Portrait"
                width={300}
                height={567}
              />
            </div>
          </div>

          <FeatureHighlights />

          {/* Highlight 1 */}
          <Bullets position="left" />

          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
              <div className="px-4 sm:px-6 lg:col-start-2 lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-purple-900 sm:text-3xl">
                  <FormattedMessage id="highlight.1.title" />
                </h2>
                <p className="mt-3 text-lg text-gray-500">
                  <FormattedMessage id="highlight.1.subtitle" />
                </p>
              </div>

              <div className="relative -mx-4 mt-10 text-center lg:col-start-1 lg:mt-0">
                <BulletsMobile />
                <Image
                  className="relative mx-auto"
                  src="/images/highlight/what.webp"
                  alt="iPhone Portrait"
                  width={300}
                  height={570}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
