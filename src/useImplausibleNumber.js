import {
  useEffect,
  useMemo,
  useReducer
} from 'react'
import { prng } from 'implausible'

const useImplausibleNumber = (initialSeed = 0) => {
  const initialState = {
    progenitor: initialSeed,
    seed: initialSeed,
    generations: 0
  }

  const [
    {
      progenitor,
      seed,
      generations
    },
    dispatch
  ] = useReducer((prevState, action) => {
    if (action.type === 'evolve') {
      return {
        ...prevState,
        seed: prng({
          seed: prevState.seed
        }),
        generations: prevState.generations + 1
      }
    }

    if (action.type === 'reseed') {
      const seed = prng()
      return {
        ...prevState,
        seed,
        progenitor: seed,
        generations: 0
      }
    }

    if (action.type === 'reset') return initialState

    if (action.type === 'restart') {
      return {
        ...prevState,
        seed: prevState.progenitor,
        generations: 0
      }
    }

    throw new Error()
  }, initialState)

  useEffect(() => () => dispatch({ type: 'reset' }), [])

  const result = useMemo(() => prng({ seed }), [seed])

  return {
    generations,
    progenitor,
    result,
    seed,
    evolve: () => dispatch({ type: 'evolve' }),
    reseed: () => dispatch({ type: 'reseed' }),
    restart: () => dispatch({ type: 'restart' })
  }
}

export default useImplausibleNumber
