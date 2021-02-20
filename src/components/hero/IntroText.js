import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: 60,
    textTransform: 'uppercase',
    fontFamiy: 'Barlow',
    letterSpacing: 3,
    textAlign: 'right',
  },
}))

export default function IntroText() {
  const classes = useStyles()
  return (
    <div className="box-content">
      <h3 className={classes.text}>
        ICELAND IS A COUNTRY OF EXTREME GEOLOGICAL CONTRASTS. WIDELY KNOWN AS
        “THE LAND OF FIRE AND ICE” ICELAND IS HOME TO SOME OF THE LARGEST
        GLACIERS IN EUROPE, AND SOME OF THE WORLD’S MOST ACTIVE VOLCANOES.
        ICELAND IS ALSO THE LAND OF LIGHT AND DARKNESS. LONG SUMMER DAYS WITH
        NEAR 24-HOURS OF SUNSHINE ARE OFFSET BY SHORT WINTER DAYS WITH ONLY A
        FEW HOURS OF DAYLIGHT.
      </h3>
    </div>
  )
}
