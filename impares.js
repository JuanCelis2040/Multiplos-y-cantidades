let contador = 0;
let cantidadNumeros = 0;
while (contador <= 100) {
  if (contador % 2 != 0){
    console.log(contador, " es impar");
    cantidadNumeros++
  }
  contador++;
}
console.log("La cantidad de impares es:",cantidadNumeros);