import Home from "../components/Home";
import renderer from 'react-test-renderer';
describe("Test snapshot component of Home", () => {
    it("renders correctly of Home", () => {
        const tree = renderer.create(<Home />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})