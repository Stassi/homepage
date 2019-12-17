import React, { useMemo } from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'
import {
  mdiAtlassian as atlassian,
  mdiBeaker as beaker,
  mdiEarth as earth,
  mdiFileDownload as fileDownload,
  mdiGithubCircle as github,
  mdiLambda as lambda,
  mdiLanguageCss3 as css,
  mdiLanguageHtml5 as html,
  mdiLanguageJavascript as javascript,
  mdiLanguagePhp as php,
  mdiLanguagePython as python,
  mdiLanguageRubyOnRails as rubyOnRails,
  mdiMaterialUi as mui,
  mdiMeteor as meteor,
  mdiNewspaper as newspaper,
  mdiMenu as menu,
  mdiNodejs as node,
  mdiReact as react,
  mdiShopping as shopping,
  mdiSprout as sprout,
  mdiTextToSpeech as textToSpeech,
  mdiTimeline as timeline,
  mdiTranslate as translate
} from '@mdi/js'

const icons = {
  atlassian,
  beaker,
  css,
  earth,
  fileDownload,
  github,
  html,
  javascript,
  lambda,
  meteor,
  newspaper,
  menu,
  mui,
  node,
  php,
  python,
  react,
  rubyOnRails,
  shopping,
  sprout,
  textToSpeech,
  timeline,
  translate
}

const useMdi = ({ name }) => useMemo(() => function Mdi () {
  return (
    <SvgIcon aria-label={name}>
      <path d={icons[name]} />
    </SvgIcon>
  )
}, [name])

export default useMdi
