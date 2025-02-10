const añadirCeros = (num) => {
  let numero = num.toString();

  if (numero.length === 1) {
    return `00${numero}`;
  } else if (numero.length === 2) {
    return `0${numero}`;
  } else {
    return numero;
  }
};

module.exports = { añadirCeros };
