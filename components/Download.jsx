import { faAppStore, faGooglePlay } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { FormattedMessage } from "react-intl"

export default function Download() {
  return (
    <section id="download">
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-24 lg:px-8">
          <Image
            src="/images/icon-square.svg"
            width={160}
            height={160}
            alt="My ADHD Logo"
          />
          <h2 className="mt-8 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="block">
              <FormattedMessage id="download.title" />
            </span>
          </h2>
          <p className="mb-8 text-lg leading-6 text-gray-900">
            <FormattedMessage id="download.description" />
          </p>
          <div className="mx-auto mt-8 grid grid-cols-1 gap-4 md:max-w-xl md:grid-cols-2">
            <a
              href="https://apps.apple.com/au/app/my-adhd/id1375236150"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-pink-600 px-5 py-3 text-base font-medium text-white hover:bg-pink-700 hover:shadow md:text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faAppStore}
                size={"lg"}
                className="-ml-1 mr-2"
                aria-hidden="true"
              />
              <FormattedMessage id="download.ios" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=tk.tdah"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-pink-600 px-5 py-3 text-base font-medium text-white hover:bg-pink-700 hover:shadow md:text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGooglePlay}
                size={"lg"}
                className="-ml-1 mr-2"
                aria-hidden="true"
              />
              <FormattedMessage id="download.android" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
