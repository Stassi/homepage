import { useMemo } from 'react'
import { sentences } from 'markovian-nlp'
import useImplausibleNumber from './useImplausibleNumber'

const useMarkovianNlp = ({ distribution }) => {
  const {
    evolve,
    generations,
    progenitor,
    reseed,
    restart,
    seed
  } = useImplausibleNumber()

  const result = useMemo(
    () => sentences({ distribution, seed })[0],
    [distribution, seed]
  )

  return {
    evolve,
    generations,
    progenitor,
    reseed,
    restart,
    result,
    seed
  }
}

export default useMarkovianNlp
