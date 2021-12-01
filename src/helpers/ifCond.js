module.exports = function(a, b, c, opts) {
  if (a || b || c) {
    return opts.fn(this);
  }
  return opts.inverse(this);
}