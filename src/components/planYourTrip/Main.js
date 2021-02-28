import { makeStyles } from '@material-ui/core/styles'

import Hero from './Hero'
import TouristInfo from './TouristInfo'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '200vh',
  },
}))

export default function PlanYourTrip() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Hero />
      <TouristInfo />
    </div>
  )
}
