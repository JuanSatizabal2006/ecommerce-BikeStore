const añadirCeros = (num) => {
  if (num.length === 1) {
    return `00${num}`;
  } else if (num.length === 2) {
    return `0${num}`;
  } else {
    return num;
  }
};

module.exports = { añadirCeros };