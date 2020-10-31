import React from 'react';

// Enzyme configurations
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

// set up enzyme's react adapter
// new instance of adapter
Enzyme.configure({ adapter: new Adapter() });

// In TDD testing, we always want Red Test before Green Test
// meaning we want our test to fail before they pass

// if there's a common code between multiple tests in a single file,
// we use jest's beforeEach helper func to extract that common logic
let wrapper; // let to reassigned new values to this variable several times during test
beforeEach(() => {
  // any logic we put here gets executed before all the tests below
  wrapper = shallow(<App />);
});

// Test stages

// shows button
test('renders button', () => {
  const button = wrapper.find('[data-test="increment-button"]');
  expect(button.length).toEqual(1);
});

// displays counter
test('renders counter display', () => {
  const counterDisplay = wrapper.find('[data-test="counter-display"]');
  expect(counterDisplay.length).toEqual(1);
});

// starting value
test('counter starts at 0', () => {
  const appComponent = wrapper.find('[data-test="component-app"]');
  expect(appComponent.length).toEqual(1);
});

// click increments counter display
test('clicking on button increments counter display', () => {
  const appComponent = wrapper.find('[data-test="component-app"]');
  expect(appComponent.length).toEqual(1);
});

// test function
// first arg - String description of the test, second arg - func with test logic
// reading this test as - test 'renders without crashing' for making meaningful description
test('renders without error', () => {
  // using Shallow render method of enzyme to render only App component
  // wrapper - a shallow instance object we get from this is a wrapped version of App component
  // wrapper specifically means that this is a wrapped component that has some additional
  // functionalities loaded on top with Enzyme
  // const wrapper = shallow(<App />);

  // find method returns back an array which contains every elements/instances that matches
  // the selector - .find(selector)
  // although we only care about only one element

  // using data-test-attribute on the top level element of component - 'div' to test rendering
  // using expect statement to throw an error, attribute syntax ([href="foo"]
  const appComponent = wrapper.find('[data-test="component-app"]'); // attrib/value
  expect(appComponent.length).toEqual(1);

  // debug() - Returns an HTML-like string of the wrapper for debugging purposes.
  // helpful if we are not sure what's going on with the test or tests are not passing
  // console.log(wrapper.debug())

  // expect statement or func, first arg is the Subject of our expectation,
  // it can be object, property, array or anything else that we want to inspect
  // toBeTurthy() is the Matcher statement is to clarify what property & how we want to
  // inspect the 'Subject'
  // expect(wrapper).toBeTruthy(); // to ensure return value is true, not falsy values
});
