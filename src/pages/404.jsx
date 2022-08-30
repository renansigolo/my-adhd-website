import ConfusedFace from "@/images/stickers/63-confused-face.svg"
import Image from "next/image"
import Link from "next/link"
import { FormattedMessage } from "react-intl"

export default function Custom404() {
  return (
    <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
      <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-shrink-0 justify-center">
          <Link className="inline-flex" href="/">
            <a>
              <span className="sr-only">Confused Face</span>
              <Image
                alt="Confused Face"
                className="h-60 w-auto"
                height={240}
                src={ConfusedFace}
                width={240}
              />
            </a>
          </Link>
        </div>
        <div className="pb-16 pt-4">
          <div className="text-center">
            <p className=" text-3xl font-semibold text-indigo-600">404</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              <FormattedMessage
                defaultMessage="Page not found."
                id="404.title"
              />
            </h1>
            <p className="mt-2 text-base text-gray-500">
              <FormattedMessage
                defaultMessage="Sorry, we couldn't find the page you're looking for."
                id="404.description"
              />
            </p>
            <div className="mt-6">
              <Link href="/">
                <a className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                  <FormattedMessage
                    defaultMessage="Go back home"
                    id="404.link"
                  />
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="mx-auto w-full max-w-7xl flex-shrink-0 px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-center space-x-4">
          <Link href="/support">
            <a className="text-sm font-medium text-gray-500 hover:text-gray-600">
              <FormattedMessage defaultMessage="Support" id="support.title" />
            </a>
          </Link>
          <span
            aria-hidden="true"
            className="inline-block border-l border-gray-300"
          />
          <Link href="#">
            <a className="text-sm font-medium text-gray-500 hover:text-gray-600">
              Instagram
            </a>
          </Link>
          <span
            aria-hidden="true"
            className="inline-block border-l border-gray-300"
          />
          <Link href="#">
            <a className="text-sm font-medium text-gray-500 hover:text-gray-600">
              Facebook
            </a>
          </Link>
        </nav>
      </footer>
    </div>
  )
}
