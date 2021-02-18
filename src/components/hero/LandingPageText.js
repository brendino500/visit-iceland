import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
  },
  title: {
    fontSize: 60,
    textTransform: 'uppercase',
    fontFamiy: 'Barlow',
    letterSpacing: 3,
    textAlign: 'right',
  },
}))

export default function LandingPageText() {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Typography className={classes.title}>Visit Iceland</Typography>
    </div>
  )
}
