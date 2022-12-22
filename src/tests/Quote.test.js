import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

describe('Test by Using Snapshot ofr Quote', () => {
  it('rendere curectlly for quote component', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
