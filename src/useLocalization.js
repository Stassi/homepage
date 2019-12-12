import { useMemo, useState } from 'react'
import vocabularies from './localization/vocabularies'

const useLocalization = initialState => {
  const [language, setLanguage] = useState(initialState)

  const vocabulary = useMemo(() => vocabularies[language], [language])

  const Phrase = useMemo(() => function Phrase ({ children: phrase }) {
    return vocabulary[phrase] || phrase
  }, [vocabulary])

  return {
    language,
    Phrase,
    setLanguage
  }
}

export default useLocalization
