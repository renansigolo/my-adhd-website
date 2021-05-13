import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { FormattedMessage } from 'react-intl'

const navigation = {
  social: [
    {
      name: 'Facebook',
      href: 'https://facebook.com/myadhdapp',
      animation: 'hover:text-blue-600',
      icon: faFacebook,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/myadhdapp',
      animation: 'hover:text-pink-600',
      icon: faInstagram,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-3 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-4">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              className={`text-gray-400 transition transform hover:scale-105 ${item.animation}`}
            >
              <span className="sr-only">{item.name}</span>
              <FontAwesomeIcon icon={item.icon} size="lg" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          <FormattedMessage
            id="footer.title"
            defaultMessage="Made with {heartIcon} by {owner}."
            values={{
              heartIcon: (
                <FontAwesomeIcon
                  icon={faHeart}
                  className="hover:text-red-500 scale"
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
              ),
            }}
          />
        </p>
        <p className="mt-6 text-center text-base text-gray-400">
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
