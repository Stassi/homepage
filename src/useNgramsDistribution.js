import { useMemo } from 'react'
import { ngramsDistribution } from 'markovian-nlp'
import blackwellConscienceText from './corpora/blackwellConscience'
import lockesEpistleText from './corpora/lockesEpistle'

const [
  blackwellConscience,
  lockesEpistle
] = [
  blackwellConscienceText,
  lockesEpistleText
].map(ngramsDistribution)

const useNgramsDistribution = (name) => useMemo(() => ({
  blackwellConscience,
  lockesEpistle
})[name], [name])

export default useNgramsDistribution
