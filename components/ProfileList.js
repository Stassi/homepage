import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Paper from '@material-ui/core/Paper'
import Icon from './Icon'

const useStyles = makeStyles(({ palette }) => ({
  avatar: {
    backgroundColor: palette.primary.main
  }
}))

const ProfileList = ({ data, subheaderText }) => {
  const { avatar: avatarClass } = useStyles()

  return (
    <Paper>
      <List
        subheader={(
          <ListSubheader disableSticky>
            {subheaderText}
          </ListSubheader>
        )}
      >
        {data.map(({
          icon,
          text,
          url
        }) => (
          <ListItem
            button
            key={text}
            onClick={ev => {
              ev.preventDefault()
              window.location = url
            }}
          >
            <ListItemAvatar>
              <Avatar className={avatarClass}>
                <Icon name={icon} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default ProfileList
