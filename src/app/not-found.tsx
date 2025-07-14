import ConfusedFace from "@/assets/images/stickers/63-confused-face.svg"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage")

  return (
    <html lang="en">
      <body>
        {/* <Error statusCode={404} /> */}
        <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
          <main className="mx-auto flex w-full max-w-7xl grow flex-col justify-center px-4 sm:px-6 lg:px-8">
            <div className="flex shrink-0 justify-center">
              <Link className="inline-flex" href="/">
                <span className="sr-only">Confused Face</span>
                <Image
                  alt="Confused Face"
                  className="h-60 w-auto"
                  height={240}
                  src={ConfusedFace}
                  width={240}
                />
              </Link>
            </div>
            <div className="pt-4 pb-16">
              <div className="text-center">
                <p className="text-3xl font-semibold text-indigo-600">404</p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  {t("404_title")}
                </h1>
                <p className="mt-2 text-base text-gray-500">
                  {t("404_description")}
                </p>
                <div className="mt-6">
                  <Link
                    className="text-base font-medium text-indigo-600 hover:text-indigo-500"
                    href="/"
                  >
                    {t("404_link")}
                    <span aria-hidden="true"> &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </main>
          <footer className="mx-auto w-full max-w-7xl shrink-0 px-4 sm:px-6 lg:px-8">
            <nav className="flex justify-center space-x-4">
              {/* <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-600"
                href="/support"
              >
                {t("404_title")}
              </Link>
              <span
                aria-hidden="true"
                className="inline-block border-l border-gray-300"
              /> */}
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-600"
                href="https://instagram.com/myadhdapp"
                target="_blank"
              >
                Instagram
              </Link>
              <span
                aria-hidden="true"
                className="inline-block border-l border-gray-300"
              />
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-600"
                href="https://facebook.com/myadhdapp"
                target="_blank"
              >
                Facebook
              </Link>
            </nav>
          </footer>
        </div>
      </body>
    </html>
  )
}
