module.exports = function greet(language, name) {
  if (language === 'italian') {
    return `Ciao ${name}!`;
  } else {
    return `Hello ${name}!`;
  }
};
