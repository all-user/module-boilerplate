'use strict';

var _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { return { powerAssertContext: { value: value, events: this.captured }, source: source }; }; return PowerAssertRecorder; }();

var assert = require('power-assert');

describe('just test', function () {
  it('always fail', function () {
    var _rec = new _powerAssertRecorder(),
        _rec2 = new _powerAssertRecorder();

    var obj = {
      a: 'a',
      b: 'b',
      c: {
        d: 'd',
        e: 'e'
      }
    };
    assert.deepEqual(_rec._expr(_rec._capt(obj, 'arguments/0'), {
      content: 'assert.deepEqual(obj, { a: \'a\', b: \'b\', c: { d: \'d\', e: \'f\' } })',
      filepath: 'test/src/index.test.js',
      line: 13
    }), _rec2._expr(_rec2._capt({
      a: 'a',
      b: 'b',
      c: _rec2._capt({
        d: 'd',
        e: 'f'
      }, 'arguments/1/properties/2/value')
    }, 'arguments/1'), {
      content: 'assert.deepEqual(obj, { a: \'a\', b: \'b\', c: { d: \'d\', e: \'f\' } })',
      filepath: 'test/src/index.test.js',
      line: 13
    }));
  });
});