/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/outline"
import { classNames } from "@lib/helpers"

const faqs = [
  {
    question: "How can I delete my account?",
    answer:
      "The option to delete your account is an irreversible action. You will lose all your data and once it's completed you won't be able to restore it. That said, you'll be able to find the delete button in your profile page inside the More tab of the app."
  },
  {
    question: "Why the delete account option is so hidden?",
    answer:
      "That's a good question, and you've probably have already guessed the answer, if not, the simple and most honest answer is... because no application wants you to stop using their services, plase don't get me wrong and allow me to explain. As a developer (and a company) we spend hundreads if not thousands of hours of our time to create something amazing, for FREE and at the best way posssible that will enrich people's life - so it's only reasonable that we want people to use this product that we so passionately developed. I hope that helps explain a little bit more the reason behind this decision and if yet, you still choose to do it, this option is available to you in a completely automated and secure way which will permanently delete all records associate to your account from our servers."
  },
  {
    question: "Once I've deleted my account can I sign-in back in the future?",
    answer:
      "Yes, you can - but bear in mind that there's no way to restore the data of your previously deleted account. We don not keep backups of your data or any sort of information related to it once it's been deleted. For more details on how your data is handled, please visit our Privacy Policy page."
  }
]

export function Faq() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            aria-hidden="true"
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
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
