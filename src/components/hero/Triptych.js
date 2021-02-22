import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    height: '80vh',
  },
  imageGrid: {
    marginTop: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    margin: 60,
  },
  imageMiddle: {
    width: 300,
    marginTop: 200,
  },
}))

export default function Triptych() {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.imageGrid}>
        <div>
          <img
            className={classes.image}
            src="https://i.ibb.co/dPfmf9P/iceland18-min.jpg"
            alt="iceland18-min"
          />
        </div>
        <div>
          <img
            className={classes.imageMiddle}
            src="https://i.ibb.co/dcVKkwh/iceland11-min.jpg"
            alt="iceland11-min"
          />
        </div>

        <div>
          <img
            className={classes.image}
            src="https://i.ibb.co/5LnMM3h/iceland17-min.jpg"
            alt="iceland17-min"
          />
        </div>
      </div>
    </div>
  )
}
