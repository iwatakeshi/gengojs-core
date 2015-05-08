'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * This module extracts the phrase and arguments
 * and uses the extractify module (See extractify).
 */

var _extractify = require('../extractify');

var _extractify2 = _interopRequireDefault(_extractify);

var _debugify = require('../debugify');

var _debugify2 = _interopRequireDefault(_debugify);

exports['default'] = function (phrase, args) {
  'use strict';
  _debugify2['default']('core-parser', 'phrase:', phrase, 'args:', args);
  return {
    arguments: args,
    length: args.length,
    phrase: phrase,
    other: _extractify2['default'](args, args.length)
  };
};

module.exports = exports['default'];