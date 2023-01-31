import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { FormattedMessage } from "react-intl"

const navigation = {
  social: [
    {
      name: "Facebook",
      href: "https://facebook.com/myadhdapp",
      animation: "hover:text-blue-600",
      icon: faFacebook
    },
    {
      name: "Instagram",
      href: "https://instagram.com/myadhdapp",
      animation: "hover:text-pink-600",
      icon: faInstagram
    }
  ]
}

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-300 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 overflow-hidden py-12 px-3 sm:px-6 lg:px-8">
        <div className="mb-2 flex flex-row justify-center space-x-4">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              className={`text-gray-500 transition hover:scale-105 ${item.animation}`}
              href={item.href}
              rel="noreferrer noopener"
              target="_blank"
            >
              <span className="sr-only">{item.name}</span>
              <FontAwesomeIcon className="h-5 w-5" icon={item.icon} />
            </a>
          ))}
        </div>

        <div className="flex justify-center align-middle">
          <p className="inline-flex flex-row gap-1 self-center text-center align-middle text-base text-gray-500">
            <FormattedMessage
              defaultMessage="Made with {heartIcon} by {owner}"
              id="footer.title"
              values={{
                heartIcon: (
                  <FontAwesomeIcon
                    className="scale h-4 w-4 hover:text-red-500"
                    icon={faHeart}
                  />
                ),
                owner: (
                  <a
                    className="hover:underline"
                    href="https://renansigolo.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Renan Sigolo
                  </a>
                )
              }}
            />
          </p>
        </div>

        <div>
          <p className="text-center text-base text-gray-500">
            <Link className="hover:underline" href="/privacy-policy">
              <FormattedMessage
                defaultMessage="Privacy Policy"
                id="privacy-policy.title"
              />
            </Link>
            {/* <span className="mx-2">|</span>
          <Link href="/support">
            <a className="hover:underline">
              <FormattedMessage defaultMessage="Support" id="faq.title" />
            </a>
          </Link> */}
          </p>
        </div>
      </div>
    </footer>
  )
}
