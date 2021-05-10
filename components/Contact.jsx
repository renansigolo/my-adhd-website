// import {
//   Box,
//   Button,
//   CircularProgress,
//   Container,
//   FormControl,
//   Grid,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
//   Typography,
// } from '@material-ui/core'
// import { makeStyles } from '@material-ui/core/styles'
// import { Alert, AlertTitle } from '@material-ui/lab'
// import { useRouter } from 'next/router'
// import React, { useState } from 'react'
// import { Controller, useForm } from 'react-hook-form'
// import { FormattedMessage, useIntl } from 'react-intl'
// import API from '../pages/api/api'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     padding: theme.spacing(4, 0),
//     justify: 'center',
//     alignItems: 'center',
//     minHeight: 400,
//   },
//   formControl: {
//     minWidth: '100%',
//   },
// }))

// function ContactForm() {
//   const classes = useStyles()
//   const router = useRouter()

//   const { locale } = router

//   // Assign add the translated fields to variables
//   const intl = useIntl()
//   const formatted = {
//     name: {
//       title: intl.formatMessage({ id: 'contact.form.name.title' }),
//       placeholder: intl.formatMessage({ id: 'contact.form.name.placeholder' }),
//       error: intl.formatMessage({ id: 'contact.form.name.error' }),
//     },
//     email: {
//       title: intl.formatMessage({ id: 'contact.form.email.title' }),
//       placeholder: intl.formatMessage({ id: 'contact.form.email.placeholder' }),
//       error: intl.formatMessage({ id: 'contact.form.email.error' }),
//     },
//     language: {
//       title: intl.formatMessage({ id: 'contact.form.language.title' }),
//     },
//     message: {
//       title: intl.formatMessage({ id: 'contact.form.message.title' }),
//       placeholder: intl.formatMessage({
//         id: 'contact.form.message.placeholder',
//       }),
//       error: intl.formatMessage({ id: 'contact.form.message.error' }),
//     },
//   }

//   const defaultValues = {
//     language: locale.substring(0, 2),
//   }

//   const [isLoading, setIsLoading] = useState(false)
//   const [isSuccess, setIsSuccess] = useState(false)
//   const {
//     register,
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ defaultValues })

//   const onSubmit = (data, evt) => {
//     setIsLoading(true)
//     // Send a POST request to Firebase Cloud Function
//     API.post('sendContactEmail', { ...data })
//       .then(() => {
//         setIsSuccess(true)
//       })
//       .catch((error) => {
//         console.error(error)
//       })
//       .finally(() => {
//         setIsLoading(false)
//         evt.target.reset() // reset after form submit
//       })
//   }

//   return (
//     <section id="contact" className={classes.root}>
//       <Container maxWidth="sm">
//         <Box mb={3}>
//           <Typography variant="h3" align="center" gutterBottom>
//             <FormattedMessage id="contact.title" />
//           </Typography>
//           <Typography variant="subtitle1" component="p" align="center">
//             <FormattedMessage id="contact.subtitle" />
//           </Typography>
//         </Box>

//         <form onSubmit={handleSubmit(onSubmit)}>
//           {isLoading ? (
//             <Grid item xs={12}>
//               <Box
//                 display="flex"
//                 justifyContent="center"
//                 alignItems="center"
//                 minHeight="300px"
//               >
//                 <CircularProgress />
//               </Box>
//             </Grid>
//           ) : (
//             <Grid container spacing={4}>
//               {isSuccess && (
//                 <Grid item xs={12}>
//                   <Alert severity="success">
//                     <AlertTitle>
//                       <FormattedMessage id="contact.success" />
//                     </AlertTitle>
//                   </Alert>
//                 </Grid>
//               )}
//               <Grid item xs={12} sm={8}>
//                 <TextField
//                   fullWidth
//                   id="name"
//                   name="name"
//                   type="text"
//                   label={formatted.name.title}
//                   placeholder={formatted.name.placeholder}
//                   variant="outlined"
//                   error={errors.name ? true : false}
//                   {...register('name', { required: true, minLength: 3 })}
//                 />
//                 <p>{errors.name && formatted.name.error}</p>
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 <FormControl variant="outlined" className={classes.formControl}>
//                   <InputLabel id="language-label">
//                     {formatted.language.title}
//                   </InputLabel>
//                   <Controller
//                     control={control}
//                     name="language"
//                     render={({ field }) => (
//                       <Select label={formatted.language.title} {...field}>
//                         <MenuItem value={'en'}>English</MenuItem>
//                         <MenuItem value={'es'}>Español</MenuItem>
//                         <MenuItem value={'pt'}>Português</MenuItem>
//                       </Select>
//                     )}
//                   ></Controller>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   id="email"
//                   name="email"
//                   type="email"
//                   label={formatted.email.title}
//                   placeholder={formatted.email.placeholder}
//                   variant="outlined"
//                   error={errors.email ? true : false}
//                   {...register('email', {
//                     required: true,
//                     pattern:
//                       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//                   })}
//                 />
//                 <p>{errors.email && formatted.email.error}</p>
//               </Grid>

//               <Grid item xs={12}>
//                 <TextField
//                   className={classes.messageInput}
//                   fullWidth
//                   multiline
//                   id="message"
//                   name="message"
//                   variant="outlined"
//                   label={formatted.message.title}
//                   placeholder={formatted.message.placeholder}
//                   error={errors.message ? true : false}
//                   rows={4}
//                   {...register('message', { required: true, minLength: 20 })}
//                 />
//                 <p>{errors.message && formatted.message.error}</p>
//               </Grid>
//               <Grid container justify="center" alignItems="center">
//                 <Grid item>
//                   <Button
//                     color="primary"
//                     size="large"
//                     type="submit"
//                     variant="contained"
//                   >
//                     <FormattedMessage id="contact.submit" />
//                   </Button>
//                 </Grid>
//               </Grid>
//             </Grid>
//           )}
//         </form>
//       </Container>
//     </section>
//   )
// }

// export default ContactForm

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
import { useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false)

  return (
    <section id="contact">
      <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div className="relative max-w-xl mx-auto">
          <svg
            className="absolute left-full transform translate-x-1/2"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
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
              height={404}
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            />
          </svg>
          <svg
            className="absolute right-full bottom-0 transform -translate-x-1/2"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
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
              height={404}
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            />
          </svg>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Contact us
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
              massa dictumst amet. Sapien tortor lacus arcu.
            </p>
          </div>
          <div className="mt-12">
            <form
              action="#"
              method="POST"
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    autoComplete="given-name"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="family-name"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone_number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="country" className="sr-only">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                    >
                      <option>US</option>
                      <option>CA</option>
                      <option>EU</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    autoComplete="tel"
                    className="py-3 px-4 block w-full pl-20 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="+1 (555) 987-6543"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    defaultValue={''}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Switch
                      checked={agreed}
                      onChange={setAgreed}
                      className={classNames(
                        agreed ? 'bg-indigo-600' : 'bg-gray-200',
                        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      )}
                    >
                      <span className="sr-only">Agree to policies</span>
                      <span
                        aria-hidden="true"
                        className={classNames(
                          agreed ? 'translate-x-5' : 'translate-x-0',
                          'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                        )}
                      />
                    </Switch>
                  </div>
                  <div className="ml-3">
                    <p className="text-base text-gray-500">
                      By selecting this, you agree to the{' '}
                      <a
                        href="#"
                        className="font-medium text-gray-700 underline"
                      >
                        Privacy Policy
                      </a>{' '}
                      and{' '}
                      <a
                        href="#"
                        className="font-medium text-gray-700 underline"
                      >
                        Cookie Policy
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Let's talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
