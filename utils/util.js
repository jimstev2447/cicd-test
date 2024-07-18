function capitalise(string) {
  if (string.length <= 1) return string.toUpperCase();
  else return string[0].toUpperCase() + string.slice(1);
}

module.exports = { capitalise };
