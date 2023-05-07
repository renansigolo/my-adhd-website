"use client"

import { classNames } from "@/lib/helpers"
import { Disclosure } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"

export default function FaqList(faqs) {
  return (
    <>
      <dl className="mt-6 space-y-6 divide-y divide-gray-200">
        {faqs?.map((faq, index) => (
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
                  <p className="text-base text-gray-500">{faq.description}</p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </>
  )
}
