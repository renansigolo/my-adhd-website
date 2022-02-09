import Image from "next/image"
import { FormattedMessage } from "react-intl"

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="mt-6 flex flex-col justify-center">
        <div className="z-0 w-screen overflow-hidden bg-fixed">
          <Image
            alt="Background My ADHD"
            src="/images/header/bg-header.webp"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority={true}
          />
        </div>
        <div className="z-10 mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg md:max-w-3xl">
            <main className="mx-auto mt-16 max-w-3xl px-4 sm:mt-20">
              <div className="text-center">
                <span className="sr-only">My ADHD Logo</span>
                <Image
                  src="/images/head/logo-outline-with-brand-underneath.svg"
                  width={160}
                  height={144}
                  className="mb-10 inline-block h-28 w-28"
                  alt="My ADHD Logo"
                  priority={true}
                />
                <h1 className="mt-4 text-3xl text-white sm:text-4xl md:text-5xl">
                  <span className="block xl:inline">
                    <FormattedMessage
                      id="hero.title"
                      defaultMessage="The first ADHD app with cognitive analysis!"
                    />
                  </span>{" "}
                </h1>

                <div className="mx-auto mt-6 flex max-w-xs justify-center md:mt-10 md:max-w-md">
                  <div className="rounded-md bg-pink-600 shadow hover:bg-pink-700">
                    <a
                      href="#download"
                      className="flex w-full items-center justify-center border border-transparent px-8 py-3 text-base font-medium text-white md:py-4 md:px-10 md:text-lg"
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
