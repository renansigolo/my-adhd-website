import { classNames } from "@/lib/helpers"
import { Disclosure } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { FormattedMessage } from "react-intl"

export function Faq(props) {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <FormattedMessage
              defaultMessage={"Frequently asked questions"}
              id={"faq.title"}
            />
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {props.faqs.map((faq, index) => (
              <Disclosure key={index} as="div" className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">
                          {faq.title}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            aria-hidden="true"
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6"
                            )}
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">
                        {faq.description}
                      </p>
                    </Disclosure.Panel>
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
