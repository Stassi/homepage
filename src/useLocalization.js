import { useMemo, useState } from 'react'
import vocabularies from './localization/vocabularies'

const useLocalization = initialState => {
  const [language, setLanguage] = useState(initialState)

  const vocabulary = useMemo(() => vocabularies[language], [language])

  const Translate = useMemo(() => function Translate ({ text }) {
    return vocabulary[text] || text
  }, [vocabulary])

  return {
    language,
    setLanguage,
    Translate
  }
}

export default useLocalization
