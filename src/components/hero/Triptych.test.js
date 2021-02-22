import renderer from 'react-test-renderer'
import Triptych from './Triptych'

it('Triptych matches snapshot', () => {
  const tree = renderer.create(<Triptych />).toJSON()
  expect(tree).toMatchSnapshot()
})
