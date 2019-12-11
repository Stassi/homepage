import { useMemo, useState } from 'react'
import vocabularies from './localization/vocabularies'

const useLocalization = initialState => {
  // TODO: Set intent
  const [languageIntent] = useState(initialState)

  const vocabulary = useMemo(() => vocabularies[languageIntent], [languageIntent])

  const Phrase = useMemo(
    () => ({ children: phrase }) => vocabulary[phrase] || phrase,
    [vocabulary]
  )

  return { Phrase }
}

export default useLocalization
