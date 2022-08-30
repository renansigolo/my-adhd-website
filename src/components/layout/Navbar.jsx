/* eslint-disable @next/next/no-img-element */
import { Logo } from "@/components/shared/Icons"
import { UserContext } from "@/lib/context"
import { Popover, Transition } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { Fragment, useContext } from "react"

const menuItems = [
  { title: "Features", url: "./#features" },
  { title: "Download", url: "./#download" },
  { title: "Contact", url: "./#contact" }
]
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" }
]

const DesktopMenu = ({ user }) => {
  return (
    <div className="bg-white shadow">
      <nav
        aria-label="Global"
        className="top relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 xl:px-8"
      >
        <div className="flex w-full items-center justify-between lg:w-auto">
          <Link href="/">
            <a>
              <span className="sr-only">My ADHD Logo</span>
              <Logo />
            </a>
          </Link>
          <div className="-mr-2 flex items-center lg:hidden">
            <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </Popover.Button>
          </div>
        </div>
        {/* <div className="hidden space-x-10 lg:ml-10 lg:flex">
          {menuItems.map(({ title, url }) => (
            <Link key={title} href={url}>
              <a className="text-base font-medium capitalize text-gray-500 hover:text-gray-600">
                {title}
              </a>
            </Link>
          ))}
        </div> */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          {!user ? (
            <>
              {/* <Link href="/sign-in">
                <a className="text-base font-medium text-gray-500 hover:text-gray-600">
                  Sign in
                </a>
              </Link> */}
              <Link href="/#download">
                <a className="rounded-md border border-transparent bg-fuchsia-600 py-2 px-6 text-base font-medium text-white shadow-md hover:bg-fuchsia-700">
                  Download
                </a>
              </Link>
            </>
          ) : (
            <button className="text-base font-medium text-gray-500 hover:text-gray-600">
              Sign Out
            </button>
          )}
        </div>
      </nav>
    </div>
  )
}

const MobileMenu = ({ user }) => (
  <Transition
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
      className="absolute inset-x-0 top-0 origin-top transform p-2 transition lg:hidden "
    >
      <div className="z-50 overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
        <div className="z-50 flex items-center justify-between px-5 pt-4">
          <div>
            <Logo />
          </div>
          <div className="-mr-2">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500">
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </Popover.Button>
          </div>
        </div>
        <div className="z-50 pt-5 pb-6">
          <div className="space-y-1 px-2">
            {menuItems.map(({ title, url }) => (
              <a
                key={title}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                href={url}
              >
                {title}
              </a>
            ))}
          </div>
          <div className="mt-6 px-5">
            {!user ? (
              <Link href="/#download">
                <a className="block w-full rounded-md border border-transparent bg-fuchsia-600 py-2 px-4 text-center font-medium text-white shadow hover:bg-fuchsia-700">
                  Download
                </a>
              </Link>
            ) : (
              <div className="border-t border-gray-700 pt-4 pb-3">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      alt=""
                      className="h-10 w-10 rounded-full"
                      src={user.photoURL}
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                      {user.displayName}
                    </div>
                    <div className="text-sm font-medium text-gray-400">
                      {user.email}
                    </div>
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  {userNavigation.map((item) => (
                    <Link key={item.displayName} href="#">
                      <a className="block rounded-md px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Popover.Panel>
  </Transition>
)

export function Navbar() {
  const { user, username } = useContext(UserContext)
  return (
    <Popover as="header" className="relative z-10">
      <DesktopMenu user={user} />
      <MobileMenu user={user} />
    </Popover>
  )
}
