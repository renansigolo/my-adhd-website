import { LogoOutlined } from "@/components/shared/Vectors"
import bgHeader from "@/images/header/bg-header.png"
import Image from "next/image"
import { FormattedMessage } from "react-intl"

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="mt-6 flex flex-col justify-center">
        <div className="z-0 w-screen overflow-hidden bg-fixed">
          <Image
            alt="Background My ADHD"
            layout="fill"
            objectFit="cover"
            priority={true}
            quality={100}
            src={bgHeader}
          />
        </div>
        <div className="z-10 mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg md:max-w-3xl">
            <main className="mx-auto mt-16 max-w-3xl px-4 sm:mt-20">
              <div className="text-center">
                <span className="sr-only">My ADHD Logo</span>
                <div className="flex justify-center">
                  <LogoOutlined />
                </div>
                <h1 className="mt-4 text-3xl text-white sm:text-4xl md:text-5xl">
                  <span className="block xl:inline">
                    <FormattedMessage
                      defaultMessage="The first ADHD app with cognitive analysis!"
                      id="hero.title"
                    />
                  </span>{" "}
                </h1>

                <div className="mx-auto mt-6 flex max-w-xs justify-center md:mt-10 md:max-w-md">
                  <div className="rounded-md bg-pink-600 shadow hover:bg-pink-700">
                    <a
                      className="flex w-full items-center justify-center border border-transparent px-8 py-3 text-base font-medium text-white md:py-4 md:px-10 md:text-lg"
                      href="#download"
                    >
                      <FormattedMessage
                        defaultMessage="Download Now"
                        id="download.title"
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
