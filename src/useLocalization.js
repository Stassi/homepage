import { useMemo, useState } from 'react'
import vocabularies from './localization/vocabularies'

const useLocalization = initialState => {
  // TODO: Set intent
  const [languageIntent] = useState(initialState)

  const language = useMemo(() => vocabularies[languageIntent], [languageIntent])

  const Phrase = useMemo(
    () => ({ children }) => language[children] || children,
    [language]
  )

  return { Phrase }
}

export default useLocalization
