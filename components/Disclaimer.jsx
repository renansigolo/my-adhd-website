// import { Container, Grid, Typography } from '@material-ui/core'
// import { makeStyles } from '@material-ui/core/styles'
// import React from 'react'
import { FormattedMessage } from 'react-intl'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: theme.spacing(2, 0),
//     minHeight: '250px',
//     color: '#fff',
//     background: 'linear-gradient(45deg, #FF4B88 30%, #7F3BF6 90%)',
//   },
//   item: {
//     alignSelf: 'center',
//     maxWidth: 380,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     color: '#fff',
//   },
// }))

// function Disclaimer() {
//   const classes = useStyles()
//   return (
//     <section id="disclaimer" className={classes.root}>
//       <Container>
//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <div className={classes.paper}>
//               <Typography
//                 variant="h5"
//                 component="h3"
//                 align="center"
//                 gutterBottom
//               >
//                 <FormattedMessage
//                   id="disclaimer.title"
//                   defaultMessage="This app is for educational purposes only and does not reflect a medical opinion.ADHD can only be diagnosed by a medical professional!"
//                   values={{ br: <br /> }}
//                 />
//               </Typography>
//             </div>
//           </Grid>
//         </Grid>
//       </Container>
//     </section>
//   )
// }

// export default Disclaimer

/* This example requires Tailwind CSS v2.0+ */
export default function Disclaimer() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
        <p className="max-w-xl mx-auto text-lg text-gray-500">
          <FormattedMessage
            id="disclaimer.title"
            defaultMessage="This app is for educational purposes only and does not reflect a medical opinion. ADHD can only be diagnosed by a medical professional!"
            values={{ br: <br /> }}
          />
        </p>
      </div>
    </div>
  )
}
