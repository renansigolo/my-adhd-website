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
            alt="My ADHD Logo"
            height={160}
            src="/images/icon-square.svg"
            width={160}
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
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-pink-600 px-5 py-3 text-base font-medium text-white hover:bg-pink-700 hover:shadow md:text-lg"
              href="https://apps.apple.com/au/app/my-adhd/id1375236150"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                aria-hidden="true"
                className="-ml-1 mr-2"
                icon={faAppStore}
                size={"lg"}
              />
              <FormattedMessage id="download.ios" />
            </a>
            <a
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-pink-600 px-5 py-3 text-base font-medium text-white hover:bg-pink-700 hover:shadow md:text-lg"
              href="https://play.google.com/store/apps/details?id=tk.tdah"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                aria-hidden="true"
                className="-ml-1 mr-2"
                icon={faGooglePlay}
                size={"lg"}
              />
              <FormattedMessage id="download.android" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
