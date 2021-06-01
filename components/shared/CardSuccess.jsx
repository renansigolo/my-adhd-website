import { CheckIcon } from "@heroicons/react/solid"
import { FormattedMessage } from "react-intl"

export default function CardSuccess() {
  return (
    <div
      className="mx-auto col-span-1 flex flex-col text-center bg-white rounded-lg shadow sm:w-3/5"
      data-test="success-notification"
    >
      <div className="flex-1 flex flex-col p-8">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
          <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
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
