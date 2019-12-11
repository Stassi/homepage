import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import LanguageIcon from '@material-ui/icons/Language'
import languages from '../src/languages'
import useMuiMenu from '../src/useMuiMenu'

const LanguageMenu = ({ menuId = 'language-menu' }) => {
  const {
    anchorEl,
    close,
    IconButton,
    isOpen
  } = useMuiMenu(menuId)

  return (
    <div>
      <IconButton>
        <LanguageIcon />
      </IconButton>

      <Menu
        {...{ anchorEl }}
        id={menuId}
        keepMounted
        onClose={close}
        open={isOpen}
      >
        {languages.map(({ endonym, iso639 }) => (
          <MenuItem key={iso639} onClick={close}>
            <ListItemAvatar>
              <Avatar variant='rounded'>
                {iso639}
              </Avatar>
            </ListItemAvatar>
            <Typography variant='inherit'>
              {endonym}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default LanguageMenu
