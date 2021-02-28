import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import { makeStyles } from '@material-ui/core/styles'

import Slide from './CarouselSlide'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 200,
    height: '80vh',
  },
  image: {
    height: '20em',
  },
}))

export default function CarouselMain() {
  const classes = useStyles()

  const content = [
    {
      activity: 'Northern Lights',
      image: 'https://i.ibb.co/4mJNrmJ/iceland16-min.jpg',
    },
    {
      activity: 'Hiking',
      image: 'https://i.ibb.co/PjhVwzQ/iceland7-min.jpg',
    },
    {
      activity: 'Geothermal Pools',
      image: 'https://i.ibb.co/gwNQh20/geothermal.png',
    },
  ]

  return (
    <div className={classes.container}>
      <Carousel plugins={['arrows']}>
        {/* <img
          src={content[0].image}
          alt={content[0].activity}
          className={classes.image}
        />
        <img
          src={content[1].image}
          alt={content[1].activity}
          className={classes.image}
        />
        <img
          src={content[2].image}
          alt={content[2].activity}
          className={classes.image}
        /> */}
        <Slide />
        <Slide />
        <Slide />
      </Carousel>
    </div>
  )
}
