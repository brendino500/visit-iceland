import IntroText from './IntroText'
import LandingPageText from './LandingPageText'

export default function Hero() {
  return (
    <>
      <div className="flex flex-col">
        <img
          className="bject-none object-left-top absolute z-0 w-3/5"
          src="https://i.ibb.co/vzq9dCS/iceland19-min.jpg"
          alt="iceland19-min"
        />
        <LandingPageText />
      </div>
      <div>
        <IntroText />
      </div>
    </>
  )
}
