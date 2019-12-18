import {
  languageDefault,
  muiThemeDefault,
  name as titleText
} from '../package'
import useLocalization from './useLocalization'
import useMuiTheme from './useMuiTheme'

const useApp = () => ({
  titleText,
  localization: useLocalization(languageDefault),
  theme: useMuiTheme(muiThemeDefault)
})

export default useApp
