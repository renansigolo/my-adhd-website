import { faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { FormattedMessage } from 'react-intl'

export default function Download() {
  return (
    <section id="download">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-24 lg:px-8">
          <Image
            src="/images/icon-square.svg"
            width={160}
            height={160}
            alt="My ADHD Logo"
          />
          <h2 className="text-3xl font-extrabold text-gray-900 mt-8 sm:text-4xl">
            <span className="block">
              <FormattedMessage id="download.title" />
            </span>
          </h2>
          <p className="mb-8 text-lg leading-6 text-gray-900">
            <FormattedMessage id="download.description" />
          </p>
          <div className="mt-8 mx-auto grid grid-cols-1 gap-4 max-w-sm md:grid-cols-2 md:max-w-xl">
            <a
              href="https://apps.apple.com/au/app/my-adhd/id1375236150"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base md:text-lg font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 hover:shadow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faAppStore}
                className="-ml-1 mr-2 h-5 w-5 text-white"
                aria-hidden="true"
              />
              <FormattedMessage id="download.ios" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=tk.tdah"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base md:text-lg font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 hover:shadow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGooglePlay}
                className="-ml-1 mr-2 h-5 w-5 text-white"
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
