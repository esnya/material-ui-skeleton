'use strict';

let mock = jest.genMockFromModule('inline-style-prefixer');

mock.prototype.prefix.mockImplementation(style => style);

module.exports = mock;
