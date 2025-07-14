import bgHeader from "@/assets/images/backgrounds/bg-header.svg"
import { LogoOutlinedWithBrandUnderneath } from "@/components/Icons"
import { useTranslations } from "next-intl"
import Image from "next/image"

export function Hero() {
  const t = useTranslations("HomePage")

  return (
    <div className="relative overflow-hidden bg-purple-900">
      <div className="flex flex-col justify-center">
        <div className="z-0 w-screen overflow-hidden bg-fixed">
          <Image
            priority
            alt="Background My ADHD"
            className="absolute size-full object-cover"
            loading="eager"
            quality={100}
            sizes="100vw"
            src={bgHeader}
          />
        </div>

        <div className="z-0 mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg md:max-w-3xl">
            <main className="mx-auto mt-16 max-w-3xl px-4 sm:mt-20">
              <div className="text-center">
                <span className="sr-only">My ADHD Logo</span>
                <div className="flex justify-center">
                  <LogoOutlinedWithBrandUnderneath />
                </div>
                <h1 className="mt-4 text-3xl text-white sm:text-4xl md:text-5xl">
                  <span className="block xl:inline">
                    {t("hero_title")}
                  </span>{" "}
                </h1>

                <div className="mx-auto mt-6 flex max-w-xs justify-center md:mt-10 md:max-w-md">
                  <div className="rounded-md bg-pink-600 shadow-sm hover:bg-pink-700">
                    <a
                      className="flex w-full items-center justify-center border border-transparent px-8 py-3 text-base font-medium text-white md:px-10 md:py-4 md:text-lg"
                      href="#download"
                    >
                      {t("download_title")}
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
