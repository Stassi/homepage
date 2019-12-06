import { muiTheme, name as titleText } from '../package'
import useMuiTheme from './useMuiTheme'

const useApp = () => ({ titleText, theme: useMuiTheme(muiTheme) })

export default useApp
