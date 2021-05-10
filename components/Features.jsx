import {
  faChalkboardTeacher,
  faGrinStars,
  faStethoscope,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormattedMessage } from 'react-intl'

const cards = [
  {
    icon: faStethoscope,
    title: 'features.card.title',
    subtitle: 'features.card.description',
  },
  {
    icon: faChalkboardTeacher,
    title: 'features.card.title',
    subtitle: 'features.card.description',
  },
  {
    icon: faGrinStars,
    title: 'features.card.title',
    subtitle: 'features.card.description',
  },
]

export default function Features() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {cards.map((card, index) => (
          <li
            key={card.title + (index + 1)}
            className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
          >
            <div className="flex-1 flex flex-col p-8">
              <FontAwesomeIcon
                icon={card.icon}
                size="4x"
                className="flex-shrink-0 mx-auto"
              />
              <h3 className="mt-6 text-gray-900 text-sm font-medium">
                <FormattedMessage id={card.title + (index + 1)} />
              </h3>
              <dl className="mt-1 flex-grow flex flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-gray-500 text-sm">
                  <FormattedMessage id={card.subtitle + (index + 1)} />
                </dd>
              </dl>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
