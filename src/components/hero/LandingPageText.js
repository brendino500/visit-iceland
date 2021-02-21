import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
  },
  titleContainer: {
    // textAlign: 'right',
  },
  title: {
    fontSize: 60,
    textTransform: 'uppercase',
    fontFamily: 'Barlow',
    letterSpacing: 3,
    marginLeft: '45vw',
    marginTop: '10vh',
  },
  subtitle: {
    fontFamily: 'Barlow',
    letterSpacing: 2,
    fontSize: 30,
    marginTop: '45vh',
    marginLeft: '60vw',
  },
}))

export default function LandingPageText() {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <Typography className={classes.title}>Visit Iceland</Typography>
        <Typography className={classes.subtitle}>
          Closer than you think
        </Typography>
      </div>
    </div>
  )
}
