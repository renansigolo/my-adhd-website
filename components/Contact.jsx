import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { FormattedMessage, useIntl } from 'react-intl'
import CardSuccess from './shared/CardSuccess'
import Spinner from './shared/Spinner'

function BgPattern() {
  return (
    <>
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
    </>
  )
}

export default function ContactForm() {
  // Get the current language to pre-define the select language field
  const router = useRouter()
  const language = router.locale.substring(0, 2)

  // Assign add the translated fields to variables
  const intl = useIntl()
  function translatedFormValues(id) {
    this.title = intl.formatMessage({ id: `contact.form.${id}.title` })
    this.placeholder = intl.formatMessage({
      id: `contact.form.${id}.placeholder`,
    })
    this.error = intl.formatMessage({ id: `contact.form.${id}.error` })
  }
  const translated = {
    name: Object(new translatedFormValues('name')),
    email: Object(new translatedFormValues('email')),
    message: Object(new translatedFormValues('message')),
  }

  // Config React Hooks Form
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = async (data, evt) => {
    const contactAPI = axios.create({
      baseURL: process.env.NEXT_PUBLIC_FIREBASE_URL,
    })

    setIsLoading(true)
    // Send a POST request to Firebase Cloud Function
    try {
      await contactAPI.post('sendContactEmail', { ...data })
      setIsSuccess(true)
    } catch (error) {
      toast.error(
        error.message || intl.formatMessage({ id: `contact.form.error` })
      )
      console.error(error)
    } finally {
      setIsLoading(false)
      evt.target.reset() // reset after form submit
    }
    // contactAPI
    //   .post('sendContactEmail', { ...data })
    //   .then(() => {
    //     setIsSuccess(true)
    //   })
    //   .catch((error) => {
    //     toast.error(
    //       error.message || intl.formatMessage({ id: `contact.form.error` })
    //     )
    //     console.error(error)
    //   })
    //   .finally(() => {
    //     setIsLoading(false)
    //     evt.target.reset() // reset after form submit
    //   })
  }

  return (
    <section id="contact">
      <div className="bg-gray-100 py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-18">
        <div className="relative max-w-xl mx-auto">
          <BgPattern />
          {!isLoading ? (
            !isSuccess ? (
              <FormValues />
            ) : (
              <CardSuccess />
            )
          ) : (
            <div className="h-96 grid place-items-center">
              <Spinner show />
            </div>
          )}
        </div>
      </div>
    </section>
  )

  function FormValues() {
    return (
      <div className="my-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <FormattedMessage id="contact.title" />
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            <FormattedMessage id="contact.subtitle" />
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              <FormattedMessage id="contact.form.name.title" />
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                placeholder={translated.name.placeholder}
                disabled={isLoading}
                className="py-3 px-4 block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 border-gray-300 rounded-md"
                {...register('name', {
                  required: true,
                })}
              />

              {errors.name?.type === 'required' && (
                <p className="mt-2 ml-2 text-red-900">
                  {translated.name.error}
                </p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="language"
              className="block text-sm font-medium text-gray-700"
            >
              <FormattedMessage id="contact.form.language.title" />
            </label>
            <div className="mt-1">
              <label htmlFor="language" className="sr-only">
                <FormattedMessage id="contact.form.language.title" />
              </label>
              <select
                id="language"
                name="language"
                defaultValue={language}
                disabled={isLoading}
                className="form-select h-12 w-full py-3 px-4 text-gray-500 border-gray-300 focus:ring-purple-500 focus:border-purple-500 rounded-md"
                {...register('language', { required: true })}
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="pt">Português</option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              <FormattedMessage id="contact.form.email.title" />
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder={translated.email.placeholder}
                disabled={isLoading}
                className="py-3 px-4 block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 border-gray-300 rounded-md"
                {...register('email', { required: true })}
              />
              {errors.email?.type === 'required' && (
                <p className="mt-2 ml-2 text-red-900">
                  {translated.email.error}
                </p>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              <FormattedMessage id="contact.form.message.title" />
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="py-3 px-4 block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 border-gray-300 rounded-md"
                defaultValue={''}
                placeholder={translated.message.placeholder}
                disabled={isLoading}
                {...register('message', { required: true })}
              />
              {errors.message?.type === 'required' && (
                <p className="mt-2 ml-2 text-red-900">
                  {translated.message.error}
                </p>
              )}
            </div>
          </div>
          {/* <div className="sm:col-span-2">
            <div className="flex items-start ml-3">
              <p className="text-base text-gray-500">
                This site is protected by reCAPTCHA and the Google{' '}
                <a
                  href="https://policies.google.com/privacy"
                  className="font-medium text-gray-700 underline"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a
                  href="https://policies.google.com/terms"
                  className="font-medium text-gray-700 underline"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Terms of Service
                </a>{' '}
                apply.
              </p>
            </div>
          </div> */}

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              <FormattedMessage id="contact.submit" />
            </button>
          </div>
        </form>
      </div>
    )
  }
}

// import React, { useState } from 'react'
// import { Controller, useForm } from 'react-hook-form'
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
//             </Grid>
//           )}
//         </form>
//       </Container>
//     </section>
//   )
// }
// export default ContactForm
