import { CheckIcon } from "@heroicons/react/solid"
import { FormattedMessage } from "react-intl"

export function CardSuccess() {
  return (
    <div
      className="col-span-1 mx-auto flex flex-col rounded-lg bg-white text-center shadow sm:w-3/5"
      data-test="success-notification"
    >
      <div className="flex flex-1 flex-col p-8">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <CheckIcon aria-hidden="true" className="h-6 w-6 text-green-600" />
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            <FormattedMessage id="contact.form.success.title" />
          </h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              <FormattedMessage id="contact.form.success.description" />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
