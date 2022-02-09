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

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-300 bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-3 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-4">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              className={`transform text-gray-500 transition hover:scale-105 ${item.animation}`}
            >
              <span className="sr-only">{item.name}</span>
              <FontAwesomeIcon icon={item.icon} size="lg" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-500">
          <FormattedMessage
            id="footer.title"
            defaultMessage="Made with {heartIcon} by {owner}."
            values={{
              heartIcon: (
                <FontAwesomeIcon
                  icon={faHeart}
                  className="scale hover:text-red-500"
                />
              ),
              owner: (
                <a
                  href="https://renansigolo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
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
                id="footer.privacy-policy"
                defaultMessage="Privacy Policy"
              />
            </a>
          </Link>
        </p>
      </div>
    </footer>
  )
}
