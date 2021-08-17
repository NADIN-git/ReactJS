import React from "react";
import ReactDOM from 'react-dom';
import { create } from "react-test-renderer";
import Button from "./Input";
import TextField from "./Input";
import Input from "./Input";

it('Renders Input', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Input />, div)
  ReactDOM.unmountComponentAtNode(div)  
})

describe("Button component", () => {
  test("Matches the snapshot", () => {
    const button = create(<Button />);
    expect(button.toJSON()).toMatchSnapshot();
  });
});

describe("TextField component", () => {
  test("Matches the snapshot", () => {
    const textField = create(<TextField />);
    expect(textField.toJSON()).toMatchSnapshot();    
  });
});
