import {
  fetchAndActivate,
  getAll,
  getRemoteConfig,
} from "firebase/remote-config"
import { createContext, useContext, useEffect, useState } from "react"
import semverSatisfies from "semver/functions/satisfies"

const FlagsContext = createContext({})
const remoteConfig = getRemoteConfig()

export const useFlags = () => {
  const context = useContext(FlagsContext)
  return context
}

// For development only
remoteConfig.settings.minimumFetchIntervalMillis = 3600000
remoteConfig.defaultConfig = {
  welcome_message: "Welcome",
}

const FlagsProvider = ({ defaults, children }) => {
  const [flags, setFlags] = useState(defaults)

  useEffect(() => {
    remoteConfig.defaultConfig = defaults

    fetchAndActivate(remoteConfig)
      .then((activated) => {
        if (!activated) console.log("not activated")
        return getAll(remoteConfig)
      })
      .then((remoteFlags) => {
        const newFlags = {
          ...flags,
        }

        for (const [key, config] of Object.entries(remoteFlags)) {
          const appVer = process.env.REACT_APP_VERSION
          newFlags[key] = semverSatisfies(appVer, config.asString())
        }

        setFlags(newFlags)
      })
      .catch((error) => console.error(error))
  }, [defaults, flags])

  return <FlagsContext.Provider value={flags}>{children}</FlagsContext.Provider>
}

export default FlagsProvider
