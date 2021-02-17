import renderer from 'react-test-renderer'
import LandingPageText from './LandingPageText'

it('LandingPageText matches snapshot', () => {
  const tree = renderer.create(<LandingPageText />).toJSON()
  expect(tree).toMatchSnapshot()
})
