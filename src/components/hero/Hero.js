import { makeStyles } from '@material-ui/core/styles'

import IntroText from './IntroText'
import LandingPageText from './LandingPageText'
import Triptych from './Triptych'

const useStyles = makeStyles((theme) => ({
  image: {
    position: 'absolute',
    width: 800,
    zIndex: -1,
    margin: -10,
  },
}))

export default function Hero() {
  const classes = useStyles()
  return (
    <>
      <div>
        <img
          className={classes.image}
          src="https://i.ibb.co/vzq9dCS/iceland19-min.jpg"
          alt="iceland19-min"
        />
        <LandingPageText />
      </div>
      <div>
        <IntroText />
      </div>
      <div>
        <Triptych />
      </div>
    </>
  )
}
