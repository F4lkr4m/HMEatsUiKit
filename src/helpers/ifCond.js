module.exports = function(a, b, c, opts) {
  console.log(a, b, c);
  if (a || b || c) {
    return opts.fn(this);
  }
  return opts.inverse(this);
}