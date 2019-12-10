import { useMemo, useState } from 'react'
import languages from './languages'

const useLocalization = initialState => {
  // TODO: Set intent
  const [languageIntent] = useState(initialState)

  const language = useMemo(() => languages[languageIntent], [languageIntent])

  const Phrase = useMemo(
    () => ({ children }) => language[children] || children,
    [language]
  )

  return { Phrase }
}

export default useLocalization
