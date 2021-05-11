import { faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Box, Button, Container, Grid, Typography } from '@material-ui/core'
// import { makeStyles } from '@material-ui/core/styles'
// import React from 'react'
import { FormattedMessage } from 'react-intl'
import { BookmarkIcon } from '@heroicons/react/solid'

import Image from 'next/image'
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     justifyContent: 'center',
//     flexDirection: 'column',
//     minHeight: '350px',
//   },
//   button: {
//     margin: theme.spacing(1),
//     minWidth: 250,
//   },
// }))

// function Download() {
//   const classes = useStyles()

//   return (
//     <section id="download">
//       <Container className={classes.root}>
//         <Box mb={3}>
//           <Typography variant="h3" component="h2" align="center">
//             <FormattedMessage id="download.title" />
//           </Typography>

//           <Typography variant="subtitle1" component="p" align="center">
//             <FormattedMessage id="download.description" />
//           </Typography>
//         </Box>

//         <Grid container justify="center">
// <Button
//   target="_blank"
//   variant="contained"
//   color="primary"
//   size="large"
//   className={classes.button}
//   startIcon={<FontAwesomeIcon icon={faAppStore} />}
//   href="https://apps.apple.com/au/app/my-adhd/id1375236150"
// >
//   <FormattedMessage id="download.ios" />
// </Button>

//           <Button
//             target="_blank"
//             variant="contained"
//             color="primary"
//             size="large"
//             className={classes.button}
//             startIcon={<FontAwesomeIcon icon={faGooglePlay} />}
//             href="https://play.google.com/store/apps/details?id=tk.tdah"
//           >
//             <FormattedMessage id="download.android" />
//           </Button>
//         </Grid>
//       </Container>
//     </section>
//   )
// }

// export default Download

export default function Download() {
  return (
    <section id="download">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-24 lg:px-8">
          <Image
            src="/images/icon-square.svg"
            width={160}
            height={160}
            alt="My ADHD Logo"
          />
          <h2 className="text-3xl font-extrabold text-gray-900 mt-8 sm:text-4xl">
            <span className="block">
              <FormattedMessage id="download.title" />
            </span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-900">
            <FormattedMessage id="download.description" />
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a
                href="https://apps.apple.com/au/app/my-adhd/id1375236150"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faAppStore}
                  className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <FormattedMessage id="download.ios" />
              </a>
            </div>
            <div className="ml-3 inline-flex">
              <a
                href="https://play.google.com/store/apps/details?id=tk.tdah"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 border-gray-300 bg-white hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGooglePlay}
                  className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <FormattedMessage id="download.android" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
