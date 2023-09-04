// Arrays.

saboresArray = [
  "-Chocolate",
  "-Chocolate amargo",
  "-Dulce de leche",
  "-Menta Granizada",
  "-Cookie",
  "-Banana Split",
  "-Crema del cielo",
  "-Maracuya",
];
pedidosArray = [];
sugeridosArray = [];

let trueOrFalse = true;

// Class constructor para los pedidos.

class Pedidos {
  constructor(nombre, sabor, cantidad) {
    this.nombre = nombre;
    this.sabor = sabor;
    this.cantidad = cantidad;
  }
}

// Programa.

programa();

function programa() {
  while (trueOrFalse) {
    pregunta = parseInt(
      prompt(
        `¿Que desea hacer? \n1- Hacer un pedido \n2- Ver los pedidos \n3- Ver los sabores de helado \n4- Sugerir un sabor de helado \n5- Ver los sabores sugeridos por los clientes. \n6- Salir`
      )
    );
    switch (pregunta) {
      case 1:
        hacerPedido();
        break;
      case 2:
        verPedidos();
        break;
      case 3:
        verSabores();
        break;
      case 4:
        sugerir();
        break;
      case 5:
        verSugeridos();
        break;
      case 6:
        trueOrFalse = false;
        break;
      default:
        alert("Ingrese una opcion valida.");
        break;
    }
  }
}

// Funciones.

function hacerPedido() {
  const nombre = prompt(
    "Ingrese su nombre para reconocer su pedido cuando este listo."
  );
  const sabor = prompt(
    "Elija los sabores de helado que quiere, le solicitamos que haga su pedido por 1 helado para agilizar nuestro rendimiento."
  );
  const cantidad = parseInt(prompt("Ingrese la cantidad de bochas de helado."));

  if (nombre == "" || sabor == "" || cantidad == "") {
    alert("Ingrese los datos correspondientes por favor.");
  } else {
    const pedido = new Pedidos(nombre, sabor, cantidad);
    pedidosArray.push(pedido);
    alert(
      "El pedido se mostrara por consola en Ver Pedidos, muchas gracias " +
        pedido.nombre
    );
    programa();
  }
}

function verPedidos() {
  for (let i = 0; i < pedidosArray.length; i++) {
    console.log(pedidosArray[i]);
  }
  alert("Los pedidos se mostraran por consola, muchas gracias.");
  programa();
}

function verSabores() {
  let sabores = "";
  saboresArray.forEach((elemento) => {
    sabores += elemento + "\n";
  });
  alert(`Los sabores se encuentran a continuacion.`);
  alert(sabores);
}

function sugerir() {
  sugerenciasClientes = prompt(
    "¿Qué sabor de helado desea sugerir que añadamos a nuestras opciones?"
  );
  sugeridosArray.unshift(sugerenciasClientes);
  alert(`Muchas gracias, podra ver su sugerencia en "Ver sabores sugeridos"`);
  programa();
}

function verSugeridos() {
  for (let i = 0; i < sugeridosArray.length; i++) {
    console.log(`Sabor sugerido: ` + sugeridosArray[i]);
  }
  alert("Los sabores sugeridos se mostraran por consola, muchas gracias.");
  programa();
}
