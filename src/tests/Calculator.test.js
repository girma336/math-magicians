import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

describe("Test snapshots to test the components of cualculator", () =>{
    it("renders correctly for calculator", () => {
        const tree = renderer.create(<Calculator />).toJSON();
        expect(tree).toMatchSnapshot()
    });
})