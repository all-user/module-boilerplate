const assert = require('assert');

describe('just test', () => {
  it('always fail', () => {
    const obj = {
      a: 'a',
      b: 'b',
      c: {
        d: 'd',
        e: 'e'
      }
    };
    assert.deepEqual(obj, {
      a: 'a',
      b: 'b',
      c: {
        d: 'd',
        e: 'f'
      }
    });
  });
});
