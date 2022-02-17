import { ContainerSection } from "@/components/layout/Containers"
import { HeaderSection } from "@/components/layout/Headers"
import { faAppStore, faGooglePlay } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FormattedMessage } from "react-intl"

export function Download() {
  return (
    <section id="download">
      <div className="bg-white">
        <ContainerSection center>
          <img
            alt="My ADHD Logo"
            className="flex-self-center inline-flex"
            height={160}
            src="/images/icon-square.svg"
            width={160}
          />
          <HeaderSection
            id="download"
            subTitle="Available for all iOS and Android devices"
            title="Download Now"
          />
          <div className="mx-auto mt-8 grid grid-cols-1 gap-4 md:max-w-xl md:grid-cols-2">
            <a
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-pink-600 px-5 py-3 text-base font-medium text-white hover:bg-pink-700 hover:shadow md:text-lg"
              href="https://apps.apple.com/au/app/my-adhd/id1375236150"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                aria-hidden="true"
                className="-ml-1 mr-2"
                icon={faAppStore}
                size={"lg"}
              />
              <FormattedMessage id="download.ios" />
            </a>
            <a
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-pink-600 px-5 py-3 text-base font-medium text-white hover:bg-pink-700 hover:shadow md:text-lg"
              href="https://play.google.com/store/apps/details?id=tk.tdah"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                aria-hidden="true"
                className="-ml-1 mr-2"
                icon={faGooglePlay}
                size={"lg"}
              />
              <FormattedMessage id="download.android" />
            </a>
          </div>
        </ContainerSection>
      </div>
    </section>
  )
}
