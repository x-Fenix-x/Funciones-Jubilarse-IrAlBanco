const argv = require('process').argv;
const comando = argv[2];
const dia = argv[3];
const hora = +argv[4];

const diaSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
const finSemana = ['Sabado', 'Domingo'];

const diaSemanaLower = diaSemana.map((d) => d.toLowerCase());
const finSemanaLower = finSemana.map((f) => f.toLowerCase());

const puedoIrAlBanco = (dia, hora) => {
  diaLower = dia.toLowerCase();
  if (diaSemanaLower.includes(diaLower) && hora >= 10 && hora <= 15) {
    return `${dia} a las ${hora} hs esta abierto.`;
  } else if (
    (diaSemanaLower.includes(diaLower) && hora >= 0 && hora < 10) ||
    (hora > 15 && hora <= 24)
  ) {
    return 'Cerrado, horario de atención de 10 a 15 hs';
  } else if (finSemanaLower.includes(diaLower)) {
    return 'Fines de semana cerrado.';
  } else {
    return 'Error, vuelva a tipear los datos.';
  }
};

if (
  comando.toLowerCase() === 'banco' &&
  (diaSemanaLower.includes(dia.toLowerCase()) ||
    finSemanaLower.includes(dia.toLowerCase())) &&
  !isNaN(hora)
) {
  console.log(puedoIrAlBanco(dia, hora));
} else {
  console.log('Verifique si ingreso todos los datos necesarios.');
}
