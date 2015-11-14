'use strict';

jest.dontMock('../App.js');
describe('App', function() {
    var React = require('react');
    var ReactDOM = require('react-dom');
    var TestUtils = require('react-addons-test-utils');

    var App = require('../App.js');

    it('should contain a test message', function () {
        var app = TestUtils.renderIntoDocument(<App />);

        var h1 = TestUtils.findRenderedDOMComponentWithTag(app, 'h1');
        expect(ReactDOM.findDOMNode(h1).textContent).toEqual('React Skeleton');

        var message = TestUtils.findRenderedDOMComponentWithClass(app, 'message');
        expect(ReactDOM.findDOMNode(message).textContent).toEqual('with Material UI');
    });

    it('should contain button with touch-tap event handler', function () {
        var onButton = jest.genMockFunction();
        var app = TestUtils.renderIntoDocument(<App onButton={onButton} />);

        var button = ReactDOM.findDOMNode(app.refs.button);

        expect(button.textContent).toEqual('Button');
        
        expect(onButton).not.toBeCalled();
        TestUtils.Simulate.touchTap(button.firstChild);
        expect(onButton).toBeCalled();
    });
});
