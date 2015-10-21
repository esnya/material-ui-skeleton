'use strict';

jest.dontMock('../js/app.js');
describe('App', function() {
    it('contains a test message', function () {
        var React = require('react');
        var ReactDOM = require('react-dom');
        var TestUtils = require('react-addons-test-utils');

        var App = require('../js/app.js');

        var app = TestUtils.renderIntoDocument(<App />);

        var h1 = TestUtils.findRenderedDOMComponentWithTag(app, 'h1');
        expect(ReactDOM.findDOMNode(h1).textContent).toEqual('React Skeleton');

        var message = TestUtils.findRenderedDOMComponentWithClass(app, 'message');
        expect(ReactDOM.findDOMNode(message).textContent).toEqual('with Material UI');
    });
});
