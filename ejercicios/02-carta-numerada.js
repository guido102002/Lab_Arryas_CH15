// ============================================================
// Ejercicio 02 · Carta numerada
// ============================================================
// El restaurante quiere imprimir la carta con un número por plato.
// La función NO imprime: entrega las líneas listas para usar.
//
// Crea la función cartaNumerada(menu) que retorne un array NUEVO
// de textos, uno por plato y en el mismo orden, con este formato:
//   "0. Bandeja paisa · $32000"
// El número es la posición del plato en el menú (empieza en 0).
//
// Ejemplos:
//   cartaNumerada(menu)[0] → "0. Bandeja paisa · $32000"
//   cartaNumerada(menu)[1] → "1. Ajiaco · $28000"
//   cartaNumerada([])      → []
//
// Pista: arreglo vacío → for → push de un texto → return al final.
// ============================================================
const menu = [
  { nombre: "Bandeja paisa", precio: 32000, categoria: "fuerte", disponible: true },
  { nombre: "Ajiaco",        precio: 28000, categoria: "fuerte", disponible: false }
];

function cartaNumerada(menu) {
  const lineas = [];

  for (let i = 0; i < menu.length; i++) {
    const plato = menu[i];

    const linea = `${i}. ${plato.nombre} · $${plato.precio}`;

    lineas.push(linea);
  }
  return lineas;
}
console.log(cartaNumerada(menu)[0]); 
console.log(cartaNumerada(menu)[1]); 
console.log(cartaNumerada([]));   

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { cartaNumerada };
