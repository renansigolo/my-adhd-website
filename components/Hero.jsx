import Image from 'next/image'
// import { Fragment } from 'react'
// import { Popover, Transition } from '@headlessui/react'
// import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { FormattedMessage } from 'react-intl'
import styles from '../styles/Hero.module.css'
// const navigation = [
//   { name: 'Features', href: '#features' },
//   { name: 'Contact', href: '#contact' },
//   { name: 'Download', href: '#download' },
// ]
export default function Hero() {
  return (
    <div className="relative bg-purple-900 overflow-hidden">
      {/* <div className="relative bg-gradient-to-bl from-purple-900 to-purple-600 overflow-hidden"> */}
      {/* <div
        className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
        aria-hidden="true"
      ></div> */}
      <div
        className={`${styles.hero__bg} pt-6 py-16 flex flex-col justify-center`}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg md:max-w-3xl mx-auto">
            <main className="mt-16 mx-auto max-w-3xl px-4 sm:mt-20">
              <div className="text-center">
                <span className="sr-only">My ADHD Logo</span>
                <Image
                  src="/images/head/logo-outline-with-brand-underneath.svg"
                  width={160}
                  height={144}
                  className="inline-block h-28 w-28 mb-10"
                  alt="My ADHD Logo"
                />
                <h1 className="text-3xl mt-4 text-white sm:text-4xl md:text-5xl">
                  <span className="block xl:inline">
                    <FormattedMessage
                      id="hero.title"
                      defaultMessage="The first ADHD app with cognitive analysis!"
                    />
                  </span>{' '}
                </h1>

                <div className="mt-6 max-w-xs md:max-w-md mx-auto flex justify-center md:mt-10">
                  <div className="rounded-md shadow bg-pink-600 hover:bg-pink-700">
                    <a
                      href="#download"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white md:py-4 md:text-lg md:px-10"
                    >
                      <FormattedMessage
                        id="download.title"
                        defaultMessage="Download Now"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
