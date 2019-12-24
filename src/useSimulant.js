import React, {
  useEffect,
  useMemo
} from 'react'
import { prng, sample } from 'implausible'

const simulantAndWorks = ({ simulant, works }) => ({
  simulant,
  works: ({
    'elizabeth-blackwell': works || sample({
      collection: ['bioethics']
    }),
    'john-locke': works || sample({
      collection: ['epistles']
    })
  })[simulant]
})

const generateParameters = ({
  algorithm,
  seed,
  simulant,
  works
}) => ({
  algorithm: algorithm || sample({
    collection: [
      'alea',
      'arc4',
      'tychei',
      'xor128',
      'xor4096',
      'xorshift7',
      'xorwow'
    ]
  }),
  seed: seed || prng(),
  ...simulantAndWorks({
    works,
    simulant: simulant || sample({
      collection: [
        'elizabeth-blackwell',
        'john-locke'
      ]
    })
  })
})

const queryAndGeneratedParamsDiffer = ({
  generatedParameters,
  query
}) => !!Object
  .keys(generatedParameters)
  .find(key => generatedParameters[key] !== query[key])

const validRedirectPath = ({
  algorithm,
  seed,
  simulant,
  works
}) => `/debug/generate/${simulant}/${works}/${algorithm}/${seed}`

const useSimulant = props => {
  useEffect(() => {
    const {
      router,
      router: {
        query
      }
    } = props

    const generatedParameters = generateParameters(query)

    const redirectNeeded = queryAndGeneratedParamsDiffer({
      generatedParameters,
      query
    })

    if (redirectNeeded) router.push(validRedirectPath(generatedParameters))
  }, [])

  const Simulant = useMemo(() => function Simulant (props) {
    return <div {...props} />
  }, [])

  return { Simulant }
}

export default useSimulant
