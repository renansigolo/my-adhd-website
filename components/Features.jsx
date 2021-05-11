import { FormattedMessage } from 'react-intl'
import Image from 'next/image'

// function FeatureHighlight(props) {
//   const classes = useStyles()
//   return (
//     <section id={props.payload.id} className={classes.root}>
//       <Container>
//         <Grid container direction={props.payload.direction} spacing={3}>
//           <Grid item xs={12} sm={6}>
//             <div className={classes.paper}>
//               <Image
//                 src={props.payload.imgSrc}
//                 alt="iPhone Portrait"
//                 width={300}
//                 height={570}
//               />
//             </div>
//           </Grid>
//           <Grid item xs={12} sm={6} style={{ alignSelf: 'center' }}>
//             <Typography variant="h4" component="h3" gutterBottom>
// <FormattedMessage
//   id={'highlight.' + props.payload.id + '-title'}
// />
//             </Typography>
//             <Typography variant="subtitle1" component="p">
//               <FormattedMessage
//                 id={'highlight.' + props.payload.id + '-subtitle'}
//               />
//             </Typography>
//           </Grid>
//         </Grid>
//       </Container>
//     </section>
//   )
// }

// export default FeatureHighlight

/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
} from '@heroicons/react/outline'

// const transferFeatures = [
//   {
//     id: 1,
//     name: 'Competitive exchange rates',
//     description:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
//     icon: GlobeAltIcon,
//   },
//   {
//     id: 2,
//     name: 'No hidden fees',
//     description:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
//     icon: ScaleIcon,
//   },
//   {
//     id: 3,
//     name: 'Transfers are instant',
//     description:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
//     icon: LightningBoltIcon,
//   },
// ]
// const communicationFeatures = [
//   {
//     id: 1,
//     name: 'Mobile notifications',
//     description:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
//     icon: AnnotationIcon,
//   },
//   {
//     id: 2,
//     name: 'Reminder emails',
//     description:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
//     icon: MailIcon,
//   },
// ]
import {
  faChalkboardTeacher,
  faGrinStars,
  faStethoscope,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FormattedMessage } from 'react-intl'

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

function FeatureHighlights() {
  return (
    <section id="feature-highlights">
      <div className="max-w-7xl my-24 mx-auto px-4 sm:px-6 lg:px-8">
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
                <h3 className="mt-6 text-gray-900 text-lg font-medium">
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
    </section>
  )
}

export default function Features() {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>

        {/* Highlight 0 */}
        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              <FormattedMessage id="highlight.0.title" />
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              <FormattedMessage id="highlight.0.subtitle" />
            </p>
          </div>

          <div
            className="mt-10 -mx-4 relative text-center lg:mt-0"
            aria-hidden="true"
          >
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={784}
                height={404}
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>
            <Image
              className="relative mx-auto"
              src="/images/highlight/learn.webp"
              alt="iPhone Portrait"
              width={300}
              height={570}
            />
          </div>
        </div>

        <FeatureHighlights />

        {/* Highlight 1 */}
        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                <FormattedMessage id="highlight.1.title" />
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                <FormattedMessage id="highlight.1.subtitle" />
              </p>

              {/* <dl className="mt-10 space-y-10">
                {communicationFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl> */}
            </div>

            <div className="mt-10 -mx-4 relative text-center lg:mt-0 lg:col-start-1">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={784}
                  height={404}
                  fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                />
              </svg>
              <Image
                className="relative mx-auto"
                src="/images/highlight/what.webp"
                alt="iPhone Portrait"
                width={300}
                height={570}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
