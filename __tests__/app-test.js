'use strict';

jest.dontMock('../js/app.js');
describe('App', function() {
    it('contains a test message', function () {
        var React= require('react');
        var TestUtils = require('react/addons').addons.TestUtils;

        var App = require('../js/app.js');

        var app = TestUtils.renderIntoDocument(<App />);

        var h1 = TestUtils.findRenderedDOMComponentWithTag(app, 'h1');
        expect(React.findDOMNode(h1).textContent).toEqual('React Skeleton');

        var message = TestUtils.findRenderedDOMComponentWithClass(app, 'message');
        expect(React.findDOMNode(message).textContent).toEqual('with Material UI');
    });
});
