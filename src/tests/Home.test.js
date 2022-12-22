import renderer from 'react-test-renderer';
import Home from '../components/Home';

describe('Test snapshot component of Home', () => {
  it('renders correctly of Home', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
