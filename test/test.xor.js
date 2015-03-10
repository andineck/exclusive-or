var test = require('tape');
var xor = require('../index');

test('test xor cases', function (t) {
  t.plan(4);
  t.equal(xor(false, false), false);
  t.equal(xor(false, true), true);
  t.equal(xor(true, false), true);
  t.equal(xor(true, true), false);
});
