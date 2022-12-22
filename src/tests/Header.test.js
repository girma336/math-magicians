import React from "react";
import renderer from 'react-test-renderer';
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
describe("Test snapshot component of Header", () => {
    it("renders correctly of Header", () => {
        const tree = renderer.create(
        <BrowserRouter>
        <Header />
        </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})