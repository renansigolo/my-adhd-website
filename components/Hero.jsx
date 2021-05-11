import Image from 'next/image'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { FormattedMessage } from 'react-intl'

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'Contact', href: '#contact' },
  { name: 'Download', href: '#download' },
]

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-bl from-purple-900 to-purple-600 overflow-hidden">
      <div
        className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
        aria-hidden="true"
      ></div>

      {/* <div className={`${styles.hero__bg} relative pt-6 pb-16 sm:pb-24`}> */}
      <div className="relative pt-6 pb-16 sm:pb-24">
        <Popover>
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <nav
                  className="relative flex items-center justify-between sm:h-10 md:justify-end"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <a href="#">
                        <span className="sr-only">Logo</span>
                        <Image
                          src="/images/head/logo-outline-with-brand-side.svg"
                          width={164}
                          height={40}
                          className="h-8 w-auto  sm:h-10"
                          alt="My ADHD logo white"
                        />
                        {/* <svg
                          viewBox="0 0 428 472"
                          xmlns="http://www.w3.org/2000/svg"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          strokeLinejoin="round"
                          strokeMiterlimit="2"
                        >
                          <defs />
                          <g fill="#fff" fillRule="nonzero">
                            <path d="M329.54 250.87c-11.48 11.48-27.09 17.75-44.1 17.75-.49 0-.96 0-1.45-.02a66.95 66.95 0 01-46.2-19.58 11.33 11.33 0 0116.02-16c7.82 7.81 18.86 12.49 30.3 12.82 11.4.32 22.11-3.67 29.43-10.98a11.33 11.33 0 0116 16m-139.33-1.84a66.95 66.95 0 01-46.2 19.59l-1.46.01c-17 0-32.61-6.27-44.1-17.75a11.26 11.26 0 01-3.32-8 11.36 11.36 0 0111.32-11.32c3.04 0 5.87 1.17 8.02 3.31 7.3 7.3 18.02 11.31 29.42 10.98 11.44-.33 22.48-5 30.3-12.83a11.34 11.34 0 0116.02 0 11.34 11.34 0 010 16.01m178.7 27c14.59-6.81 25.36-22.61 25.36-40.02a40.71 40.71 0 00-19.16-34.51 11.24 11.24 0 01-3.76-15.13 40.24 40.24 0 005.5-20.03c0-23.19-19.13-43.54-40.93-43.54-8.98 0-17.5 3.44-24.41 9.11a10.84 10.84 0 01-17.03-4.51l-.38-1a10.79 10.79 0 013.22-12.19c10.8-8.77 24.25-14.05 38.6-14.05 1.97 0 4 .1 6.02.31a32.05 32.05 0 00-11.68-22.6 31.97 31.97 0 00-17.53-7.2A32.1 32.1 0 00287 79.99a11.38 11.38 0 01-16.99-1.11c-3.49-4.54-2.9-11.1 1.36-15.28a54.46 54.46 0 0125.82-14.24c-8.14-10.24-19.47-16.26-30.94-16.26-21.8 0-40.93 20.35-40.93 43.54v52.7a11.32 11.32 0 11-22.64 0v-52.7c0-23.19-19.13-43.54-40.93-43.54-11.47 0-22.8 6-30.95 16.26A54.45 54.45 0 01157 63.96a11.24 11.24 0 013.32 8A11.35 11.35 0 01141 79.98a32.05 32.05 0 00-22.8-9.43 32.03 32.03 0 00-23 9.65 31.92 31.92 0 00-9.14 20.27c2.02-.2 4.04-.31 6.02-.31a60.83 60.83 0 0135.3 11.5 11.36 11.36 0 01-13.22 18.5c-6.47-4.62-14.1-7.36-22.08-7.36-21.8 0-40.93 20.35-40.93 43.54 0 6.85 1.84 13.58 5.47 20a11.36 11.36 0 01-3.8 15.2A40.7 40.7 0 0033.74 236c0 17.4 10.77 33.2 25.36 40.01 3.99 1.86 6.55 5.85 6.55 10.25 0 8.2-8.49 13.77-15.92 10.34a64.5 64.5 0 01-11.44-6.8 40.1 40.1 0 00-4.55 18.48c0 12 5.43 23.4 14.92 31.3a11.34 11.34 0 013.77 11.38c-3.35 13.98.48 28.36 10.52 39.45 8.81 9.74 20.96 14.88 31.73 13.4l1.9-.24c4.85-.55 9.5 2.06 11.55 6.48a49.79 49.79 0 0044.92 28.86c19.68 0 38.12-13.16 45.88-32.74A16.2 16.2 0 01214 395.8a16.2 16.2 0 0115.07 10.38c7.76 19.58 26.2 32.74 45.89 32.74 19.1 0 36.7-11.27 44.85-28.73a11.46 11.46 0 0111.61-6.62l1.9.25c9.26 1.27 19.41-2.23 27.84-9.58 9.98-8.7 15.69-20.98 15.69-33.7 0-2.9-.4-5.94-1.27-9.56-1-4.18.48-8.66 3.78-11.4a40.74 40.74 0 0014.9-31.29c0-6.4-1.56-12.73-4.55-18.48a64.47 64.47 0 01-11.43 6.8c-7.44 3.43-15.92-2.14-15.92-10.34 0-4.4 2.56-8.39 6.55-10.25" />
                            <path d="M416.9 308.28c0 16.5-6.38 32.08-18.02 44.03.41 2.86.61 5.55.61 8.22 0 35.64-28.73 65.79-62.89 66.19a72.46 72.46 0 01-61.64 34.83c-24.55 0-47.53-13.4-60.96-35.25-13.48 21.88-36.43 35.25-60.96 35.25a72.47 72.47 0 01-61.65-34.83c-17.69-.21-34.7-8.46-46.8-22.7-12.48-14.72-18.08-33.49-15.48-51.7a62.75 62.75 0 01-7.34-79.02A72.98 72.98 0 0111.1 236a63.12 63.12 0 0121.54-47.56 61.57 61.57 0 01-4.13-22.1c0-24.52 13.7-47.44 35.04-58.91a54.87 54.87 0 0140.55-57.68c10.75-23.58 33.75-39.3 57.66-39.3 20.6 0 40.26 11.02 52.25 29.03 11.99-18.02 31.65-29.03 52.25-29.03 23.92 0 46.94 15.74 57.66 39.3a54.86 54.86 0 0140.55 57.68c21.31 11.42 35.03 34.36 35.03 58.9 0 7.54-1.4 14.97-4.13 22.11A63.13 63.13 0 01416.91 236a72.99 72.99 0 01-10.69 37.3 62.7 62.7 0 0110.69 34.98m1.41-35.17a83.43 83.43 0 009.04-37.11 73.8 73.8 0 00-20.03-50.51 71.85 71.85 0 002.6-19.16c0-13.91-3.8-27.64-10.98-39.72a77.01 77.01 0 00-23.84-24.99 65.16 65.16 0 00-43.82-60.53 79.32 79.32 0 00-25.37-28.46C293.81 4.37 280.09 0 266.25 0 246.61 0 227.87 8.34 214 22.82 200.13 8.34 181.38 0 161.75 0c-13.84 0-27.55 4.36-39.65 12.62a79.31 79.31 0 00-25.38 28.47 65.18 65.18 0 00-43.83 60.53 77.25 77.25 0 00-23.85 25.02 77.6 77.6 0 00-10.99 39.69c0 6.48.88 12.89 2.62 19.16A73.71 73.71 0 00.64 236a83.4 83.4 0 009.04 37.11 73.02 73.02 0 008.55 82.76c-1.4 19.55 5.17 39.31 18.4 54.91 12.73 15 30.3 24.31 48.93 26.08 15.41 21.81 40.77 35.14 67.48 35.14a79.6 79.6 0 0039.86-10.83 84.57 84.57 0 0021.09-17.36 84.64 84.64 0 0021.08 17.35A79.71 79.71 0 00274.96 472c26.71 0 52.07-13.33 67.48-35.13 17.25-1.62 33.4-9.59 45.99-22.83a77.4 77.4 0 0021.5-53.51c0-1.54-.04-3.09-.16-4.66a73.09 73.09 0 008.55-82.76" />
                          </g>
                        </svg> */}
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
                  {/* <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                    <span className="inline-flex rounded-md shadow">
                      <a
                        href="#download"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
                      >
                        Download
                      </a>
                    </span>
                  </div> */}
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
                      className="block rounded-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                    >
                      Download Now
                    </a>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
          <div className="max-w-3xl mx-auto">
            {/* Content goes here */}
            <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
              <div className="text-center">
                <span className="sr-only">My ADHD Logo</span>
                <Image
                  src="/images/head/logo-outline-with-brand-underneath.svg"
                  width={160}
                  height={144}
                  className="inline-block h-28 w-28 mb-10"
                  alt="My ADHD Logo"
                />
                <h1 className="text-4xl mt-4 text-white sm:text-5xl md:text-5xl">
                  <span className="block xl:inline">
                    <FormattedMessage
                      id="hero.title"
                      defaultMessage="The first ADHD app with cognitive analysis!"
                    />
                  </span>{' '}
                </h1>
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                  <div className="rounded-full shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
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
