import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 200,
    height: '60vh',
  },
  image: {
    height: '20em',
  },
  slideLayout: {
    display: 'flex',
  },
  textLayout: {
    marginLeft: '5em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Barlow',
    fontSize: '1.6em',
    textTransform: 'uppercase',
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
      <div>
        <Typography className={classes.title}>Get Inspired</Typography>
      </div>
      <Carousel
        plugins={[
          'clickToChange',
          'centered',
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 2,
            },
          },
        ]}
      >
        <div className={classes.slideLayout}>
          <img
            src={content[0].image}
            alt={content[0].activity}
            className={classes.image}
          />
          <div className={classes.textLayout}>
            <Typography className={classes.text}>
              {content[0].activity}
            </Typography>
          </div>
        </div>
        <div className={classes.slideLayout}>
          <img
            src={content[1].image}
            alt={content[1].activity}
            className={classes.image}
          />
          <div className={classes.textLayout}>
            <Typography className={classes.text}>
              {content[1].activity}
            </Typography>
          </div>
        </div>
        <div className={classes.slideLayout}>
          <img
            src={content[2].image}
            alt={content[2].activity}
            className={classes.image}
          />
          <div className={classes.textLayout}>
            <Typography className={classes.text}>
              {content[2].activity}
            </Typography>
          </div>
        </div>
        {/* <Slide content={content} />
        <Slide />
        <Slide /> */}
      </Carousel>
    </div>
  )
}
