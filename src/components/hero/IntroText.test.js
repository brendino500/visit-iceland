import renderer from 'react-test-renderer'
import IntroText from './IntroText'

it('IntroText matches snapshot', () => {
  const tree = renderer.create(<IntroText />).toJSON()
  expect(tree).toMatchSnapshot()
})
