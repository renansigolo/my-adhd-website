import { Divider } from '@material-ui/core'
import Head from 'next/head'
import React from 'react'
import Contact from '../components/Contact'
import Disclaimer from '../components/Disclaimer'
import Download from '../components/Download'
import FeatureHighlight from '../components/FeatureHighlight'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'

// function initializeReactGA() {
//   ReactGA.initialize('UA-82193310-7')
//   ReactGA.pageview(window.location.pathname + window.location.search)
// }

const payloadLearn = {
  id: 'learn',
  imgSrc: '/images/highlight/learn.webp',
  direction: 'row',
}
const payloadWhat = {
  id: 'what',
  imgSrc: '/images/highlight/what.webp',
  direction: 'row-reverse',
}

function EnvTag() {
  return (
    <div className="env-tag">
      <span>{process.env.NODE_ENV.toUpperCase()}</span>
    </div>
  )
}

export default function Home() {
  const isProd = process.env.NODE_ENV === 'production' ? true : false
  const title = 'My ADHD'
  const description = 'The first ADHD app with cognitive analysis!'

  return (
    <React.Fragment>
      <div className={styles.container}>
        <Head>
          {/* Primary Meta Tags */}
          <title>My ADHD Website</title>
          <meta
            name="description"
            content={`My ADHD Website - ${description}`}
          />
          <meta
            name="keywords"
            content="Adhd, adhd, tdah, diagnostic, medical, brain, AI"
          />
          <meta name="author" content="Renan Sigolo" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://myadhd.app/" />
          <meta property="og:site_name" content={title} key="ogsitename" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta
            property="og:image"
            content="https://myadhd.app/images/social-banner.png"
          />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://myadhd.app/" />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
          <meta
            property="twitter:image"
            content="https://myadhd.app/images/social-banner.png"
          />

          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#ff4b88" />
          <meta name="robots" content="index, follow" />
          <meta name="apple-itunes-app" content="app-id=1375236150" />
          <link rel="apple-touch-icon" href="/images/icons/icon-192x192.png" />
          <link rel="apple-touch-startup-image" href="/images/splash.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="landing">
          {isProd ? null : <EnvTag />}

          <Hero />

          <FeatureHighlight payload={payloadLearn} />

          <Features />

          <FeatureHighlight payload={payloadWhat} />

          <Disclaimer />

          <Download />

          <Divider />

          <Contact />
        </div>

        {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main> */}

        <Footer />
        {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
      </div>
    </React.Fragment>
  )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
