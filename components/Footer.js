import React, { forwardRef, useMemo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    backgroundColor: palette.background.paper,
    padding: spacing(6, 0)
  }
}))

const Footer = forwardRef((props, ref) => {
  const { root: rootClass } = useStyles()

  const currentYear = useMemo(() => new Date().getFullYear(), [])

  return (
    <footer className={rootClass} {...{ ref, ...props }}>
      <Container>
        <Grid
          alignItems='center'
          container
          justify='center'
          spacing={1}
        >
          <Grid item>
            <Typography
              color='textSecondary'
              variant='body2'
            >
              Copyright © {currentYear} Andreas Stassivik.
            </Typography>
            <Typography
              color='textSecondary'
              variant='body2'
            >
              Available under a permissive open source license.
            </Typography>
          </Grid>
          <Grid item>
            <Button
              onClick={() => {
                window.location = 'https://github.com/Stassi/homepage/blob/master/LICENSE'
              }}
              size='small'
            >
              View license
            </Button>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
})

export default Footer
