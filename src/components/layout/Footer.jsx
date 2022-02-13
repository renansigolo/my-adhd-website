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
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-3 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-4">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              className={`transform text-gray-500 transition hover:scale-105 ${item.animation}`}
              href={item.href}
              rel="noreferrer noopener"
              target="_blank"
            >
              <span className="sr-only">{item.name}</span>
              <FontAwesomeIcon icon={item.icon} size="lg" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-500">
          <FormattedMessage
            defaultMessage="Made with {heartIcon} by {owner}."
            id="footer.title"
            values={{
              heartIcon: (
                <FontAwesomeIcon
                  className="scale hover:text-red-500"
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
        <p className="mt-6 text-center text-base text-gray-500">
          <Link href="/privacy-policy">
            <a className="hover:underline">
              <FormattedMessage
                defaultMessage="Privacy Policy"
                id="privacy-policy.title"
              />
            </a>
          </Link>
          <span className="mx-2">|</span>
          <Link href="/support">
            <a className="hover:underline">
              <FormattedMessage defaultMessage="Support" id="faq.title" />
            </a>
          </Link>
        </p>
      </div>
    </footer>
  )
}
