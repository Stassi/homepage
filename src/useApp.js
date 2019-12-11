import {
  languageDefault,
  languages,
  muiTheme,
  name as titleText
} from '../package'
import useLocalization from './useLocalization'
import useMuiTheme from './useMuiTheme'

const useApp = () => ({
  languages,
  titleText,
  localization: useLocalization(languageDefault),
  theme: useMuiTheme(muiTheme)
})

export default useApp
