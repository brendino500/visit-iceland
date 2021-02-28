import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '6em',
  },
  textContainer: {
    maxWidth: '35%',
    marginRight: '2em',
    fontFamily: 'Barlow',
    fontSize: '1.6em',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  title: {
    fontFamily: 'Barlow',
    fontSize: '2.2em',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  image: {
    height: '25em',
  },
}))

export default function Hero() {
  const classes = useStyles()
  return (
    <div>
      <Typography className={classes.title}>Plan your trip</Typography>
      <div className={classes.content}>
        <p className={classes.textContainer}>
          Iceland is a country of extreme contrasts where long summer days with
          near 24 hours of sunlight are offset by short winder days
        </p>

        <img
          src="https://i.ibb.co/jyQGK0F/iceland6-min.jpg"
          alt="iceland6-min"
          border="0"
          className={classes.image}
        />
      </div>
    </div>
  )
}
