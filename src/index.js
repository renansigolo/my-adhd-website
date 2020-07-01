import React from 'react'
import ReactDOM from 'react-dom'
import { IntlProvider } from 'react-intl'
import App from './App'
import * as serviceWorker from './serviceWorker'
import messages_en from './translations/en.json'
import messages_es from './translations/es.json'
import messages_pt from './translations/pt.json'

const messages = {
  en: messages_en,
  es: messages_es,
  pt: messages_pt,
}
const language = navigator.language.split(/[-_]/)[0]

ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
