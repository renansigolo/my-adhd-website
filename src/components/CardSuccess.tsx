import { CheckIcon } from "@heroicons/react/20/solid"
import { useTranslations } from "next-intl"

export function CardSuccess() {
  const t = useTranslations("HomePage")

  return (
    <div
      className="col-span-1 mx-auto flex flex-col rounded-lg bg-white text-center shadow-sm sm:w-3/5"
      data-test="success-notification"
    >
      <div className="flex flex-1 flex-col p-8">
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-green-100">
          <CheckIcon aria-hidden="true" className="size-6 text-green-600" />
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {t("contact_form.success.title")}
          </h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              {t("contact_form.success.description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
