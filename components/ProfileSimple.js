import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Fade from '@material-ui/core/Fade'
import Grid from '@material-ui/core/Grid'
import Slide from '@material-ui/core/Slide'
import Typography from '@material-ui/core/Typography'
import Footer from './Footer'
import ProfileActions from './ProfileActions'
import ProfileAppBarSimple from './ProfileAppBarSimple'
import ProfileList from './ProfileList'
import TicketAvatar from './TicketAvatar'
import domains from '../src/domains'
import proficiencies from '../src/proficiencies'

const useStyles = makeStyles(({ spacing }) => ({
  container: {
    paddingBottom: spacing(4),
    paddingTop: spacing(2)
  },
  divider: {
    margin: spacing(1, 0)
  }
}))

const ProfileSimple = ({
  localization,
  localization: { translate },
  ...props
}) => {
  const {
    container: containerClass,
    divider: dividerClass
  } = useStyles()

  return (
    <>
      <ProfileAppBarSimple {...{ localization, ...props }} />

      <Fade in>
        <Container className={containerClass}>
          <Grid
            alignItems='center'
            container
            direction='column'
            spacing={1}
          >
            <Grid item>
              <TicketAvatar />
            </Grid>

            <Grid item>
              <Typography
                align='center'
                color='textPrimary'
                component='h1'
                variant='h2'
              >
                Andreas Stassivik
              </Typography>
            </Grid>

            <Grid item>
              <Typography
                align='center'
                color='textSecondary'
                component='h2'
                gutterBottom
                variant='h5'
              >
                {translate('Software Developer')}
              </Typography>
            </Grid>

            <Divider className={dividerClass} />

            <Grid
              container
              direction='row-reverse'
              item
              spacing={1}
              xs
            >
              <ProfileActions {...props} />

              <Grid item xs={12}>
                <Divider className={dividerClass} />
              </Grid>

              <Grid item xs={12} sm={6}>
                <ProfileList
                  data={domains}
                  subheaderText='Domains'
                  {...{ localization, ...props }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <ProfileList
                  data={proficiencies}
                  subheaderText='Proficiencies'
                  {...{ localization, ...props }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Fade>

      <Slide direction='up' in>
        <Footer />
      </Slide>
    </>
  )
}

export default ProfileSimple
