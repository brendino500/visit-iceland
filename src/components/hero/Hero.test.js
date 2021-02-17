import renderer from 'react-test-renderer'
import Hero from './Hero'

it('Hero matches snapshot', () => {
  const tree = renderer.create(<Hero />).toJSON()
  expect(tree).toMatchSnapshot()
})
