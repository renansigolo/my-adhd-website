import { Container } from "@/components/Container"
import { AppIconSquare } from "@/components/Icons"
import { Subtitle } from "@/components/Subtitle"
import { Title } from "@/components/Title"
import { Link } from "@/i18n/navigation"
import { faAppStore, faGooglePlay } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTranslations } from "next-intl"

export function Download() {
  const t = useTranslations("HomePage")

  return (
    <section id="download">
      <div className="bg-white">
        <Container center>
          <AppIconSquare />
          <Title>{t("download_title")}</Title>
          <Subtitle>{t("download_subtitle")}</Subtitle>

          <div className="mx-auto mt-8 grid grid-cols-1 gap-4 md:max-w-xl md:grid-cols-2">
            <Link
              className="inline-flex items-center justify-center gap-x-2 rounded-md border border-transparent bg-pink-600 px-5 py-3 text-base font-medium text-white hover:bg-pink-700 hover:shadow-sm md:text-lg"
              href="https://apps.apple.com/au/app/my-adhd/id1375236150"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                aria-hidden="true"
                className="mr-2 size-6"
                icon={faAppStore}
                size={"lg"}
              />
              {t("download_ios")}
            </Link>
            <a
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-pink-600 px-5 py-3 text-base font-medium text-white hover:bg-pink-700 hover:shadow-sm md:text-lg"
              href="https://play.google.com/store/apps/details?id=tk.tdah"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                aria-hidden="true"
                className="mr-2 size-6"
                icon={faGooglePlay}
                size={"lg"}
              />
              {t("download_android")}
            </a>
          </div>
        </Container>
      </div>
    </section>
  )
}
