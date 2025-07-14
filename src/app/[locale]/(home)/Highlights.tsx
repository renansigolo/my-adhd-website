import LearnImage from "@/assets/images/highlight/learn.png"
import WhatImage from "@/assets/images/highlight/what.png"
import {
  faChalkboardTeacher,
  faGrinStars,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTranslations } from "next-intl"
import Image from "next/image"

const cards = [
  {
    icon: faStethoscope,
    title: "features_card_title",
    subtitle: "features_card_description",
  },
  {
    icon: faChalkboardTeacher,
    title: "features_card_title",
    subtitle: "features_card_description",
  },
  {
    icon: faGrinStars,
    title: "features_card_title",
    subtitle: "features_card_description",
  },
]

const FeatureHighlights = () => {
  const t = useTranslations("HomePage")

  return (
    <div className="mx-auto my-24 max-w-7xl px-4">
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {cards.map((card, index) => (
          <li
            key={card.title + (index + 1)}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-linear-to-tr from-purple-800 to-pink-600 text-center shadow-sm"
          >
            <div className="flex flex-1 flex-col p-8 text-white">
              <FontAwesomeIcon
                className="mx-auto h-16 shrink-0"
                icon={card.icon}
                size="4x"
              />
              <h3 className="mt-6 text-lg font-medium">
                {t(`${card.title}_${index + 1}`)}
              </h3>
              <dl className="mt-1">
                <dt className="sr-only">Title</dt>
                <dd className="text-sm">
                  {t(`${card.subtitle}_${index + 1}`)}
                </dd>
              </dl>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

const BulletsMobile = () => {
  return (
    <>
      <svg
        aria-hidden="true"
        className="absolute left-1/2 -translate-x-1/2 translate-y-16 lg:hidden"
        fill="none"
        height={404}
        viewBox="0 0 784 404"
        width={784}
      >
        <defs>
          <pattern
            height={20}
            id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
            patternUnits="userSpaceOnUse"
            width={20}
            x={0}
            y={0}
          >
            <rect
              className="text-gray-200"
              fill="currentColor"
              height={4}
              width={4}
              x={0}
              y={0}
            />
          </pattern>
        </defs>
        <rect
          fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
          height={404}
          width={784}
        />
      </svg>
    </>
  )
}

type BulletsProps = {
  position: "left" | "right"
}
const Bullets = (props: BulletsProps) => {
  // Adjust the classed to match the side of the screen
  const left = "right-full translate-x-1/2 translate-y-12"
  const right = "left-full -translate-x-1/2 -translate-y-1/4"
  const screenPosition = props.position === "left" ? left : right

  return (
    <>
      <svg
        aria-hidden="true"
        className={`absolute hidden transform lg:block ${screenPosition}`}
        fill="none"
        height={784}
        viewBox="0 0 404 784"
        width={404}
      >
        <defs>
          <pattern
            height={20}
            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
            patternUnits="userSpaceOnUse"
            width={20}
            x={0}
            y={0}
          >
            <rect
              className="text-gray-200"
              fill="currentColor"
              height={4}
              width={4}
              x={0}
              y={0}
            />
          </pattern>
        </defs>
        <rect
          fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          height={784}
          width={404}
        />
      </svg>
    </>
  )
}

export function Highlights() {
  const t = useTranslations("HomePage")

  return (
    <section id="features">
      <div className="overflow-hidden bg-gray-50 py-12 lg:py-24">
        <div className="relative mx-auto sm:px-6 md:max-w-7xl lg:px-8">
          <Bullets position="right" />

          {/* Highlight 0 */}
          <div className="relative mt-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="relative px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-extrabold tracking-tight text-purple-900 sm:text-3xl">
                {t("highlight_0_title")}
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                {t("highlight_0_subtitle")}
              </p>
            </div>

            <div
              aria-hidden="true"
              className="relative mx-auto mt-10 w-80 text-center lg:mt-0"
            >
              <BulletsMobile />
              <Image
                alt="iPhone Portrait"
                className="relative mx-auto"
                src={LearnImage}
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
                  {t("highlight_1_title")}
                </h2>
                <p className="mt-3 text-lg text-gray-500">
                  {t("highlight_1_subtitle")}
                </p>
              </div>

              <div className="relative mx-auto mt-10 w-80 text-center lg:col-start-1 lg:mt-0">
                <BulletsMobile />
                <Image
                  alt="iPhone Portrait"
                  className="relative mx-auto"
                  src={WhatImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
