import { useMemo, useState } from 'react'
import vocabularies from './localization/vocabularies'

const useLocalization = initialState => {
  const [language, setLanguage] = useState(initialState)

  const vocabulary = useMemo(() => vocabularies[language], [language])

  const translate = useMemo(() => text => vocabulary[text] || text, [vocabulary])

  return {
    language,
    setLanguage,
    translate
  }
}

export default useLocalization
