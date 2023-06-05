const argv = require('process').argv;
const comando = argv[2];
const edad = +argv[3];
const genero = argv[4];
const aportes = +argv[5];

const estaEnEdad = (edad, genero) => {
  return (
    (genero.toLowerCase() === 'f' && edad >= 60) || (genero.toLowerCase() === 'm' && edad >= 65)
  );
};

const aportesSuficientes = (aportes) => {
  return aportes >= 30;
};

const puedeJubilarse = (edad, genero, aportes) => {
  if (estaEnEdad(edad, genero) && aportesSuficientes(aportes)) {
    return 'Puede jubilarse.';
  } else {
    return 'No cumple los requisitos.';
  }
};

if ((comando === 'jubilacion') && (!isNaN(edad) && !isNaN(aportes) && (genero.toLowerCase() === "f" || genero.toLowerCase() === "m")))  {
  console.log(puedeJubilarse(edad, genero, aportes));
} else {
    console.log("Verifique si ingreso todos los datos necesarios.");
}
