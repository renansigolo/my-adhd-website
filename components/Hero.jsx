import Image from 'next/image'
// import { Fragment } from 'react'
// import { Popover, Transition } from '@headlessui/react'
// import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { FormattedMessage } from 'react-intl'
import styles from '../styles/Home.module.css'
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
        {/* <div className="relative pt-6 pb-16 sm:pb-32"> */}
        {/* <Popover>
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <nav
                  className="relative flex items-center justify-between sm:h-10 md:justify-end"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <a href="/">
                        <span className="sr-only">Logo</span>
                        <Image
                          src="/images/head/logo-outline-with-brand-side.svg"
                          width={164}
                          height={40}
                          className="h-8 w-auto  sm:h-10"
                          alt="My ADHD logo white"
                        />
                      </a>
                      <div className="-mr-2 flex items-center md:hidden">
                        <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Open main menu</span>
                          <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex md:space-x-10">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="font-medium text-gray-200 hover:text-gray-400"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  static
                  className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div>
                        <Image
                          src="/images/head/logo.svg"
                          width={29}
                          height={32}
                          className="h-8 w-auto"
                          alt="My ADHD Logo"
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <a
                      href="#download"
                      className="block rounded-full px-5 py-3 text-center font-medium text-purple-600 bg-gray-50 hover:bg-gray-100"
                    >
                      Download Now
                    </a>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover> */}

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
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
