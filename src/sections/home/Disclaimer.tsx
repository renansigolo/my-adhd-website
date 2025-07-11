import { ContainerSection } from "@/components/layout/Containers"
import { useTranslations } from "next-intl"

export function Disclaimer() {
  const t = useTranslations("HomePage")

  return (
    <div className="bg-linear-to-tl from-purple-800 to-pink-500 text-center">
      <ContainerSection>
        <p aria-required className="text-2xl text-white">
          {/* <FormattedMessage
            defaultMessage="This app is for educational purposes only and does not reflect a medical opinion. ADHD can only be diagnosed by a medical professional!"
            id="disclaimer.title"
            values={{ br: <br /> }}
          /> */}
          {t("disclaimer.title")}
        </p>
      </ContainerSection>
    </div>
  )
}
