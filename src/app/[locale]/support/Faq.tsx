import { classNames } from "@/lib/helpers"
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { useTranslations } from "next-intl"

type FaqProps = {
  faqs: {
    title: string
    description: string
  }[]
}

export function Faq(props: FaqProps) {
  const t = useTranslations("HomePage")

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t("faq_title")}
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {props.faqs.map((faq, index) => (
              <Disclosure key={index} as="div" className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <DisclosureButton className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">
                          {faq.title}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            aria-hidden="true"
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "size-6",
                            )}
                          />
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">
                        {faq.description}
                      </p>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
