let mensaje = "Bienvenido amante de los autos, continua para descubrir lo que tenemos para ti :) 🚗"
alert(mensaje)
//declaramos constante marcas que va a contener las tres marcas elegidas junto con sus elemento
const marcas= { 
    porsche: {  //de definen el objetos de las tres marcas  
        nombre: "Porsche", modelos: [  {  //dentro de los objetos se encuentran los arreglos con los dos modelos por marca
            nombre: "911 Turbo S",   // cada elemento del arreglo tiene sus propiedades con su valor asignado
            tipo: "Automático",
            año: 2025,
            precio: "$2,710,000",
            icono: "⚡"
        },
        {
            nombre: "911 gt3 rs",
            tipo: "Estandar",
            año: 2025,
            precio: "$4,150,000",
            icono: "🏎️"
        }]
    }, 
    corvette: {
        nombre: "Corvette",
        modelos: [
            {
                nombre: "Stingray",
                tipo: "Estándar",
                año: 2025,
                precio: "$6,555,000",
                icono: "🔥"
            },
            {
                nombre: "Z06",
                tipo: "Automático",
                año: 2025,
                precio: "$5,870,000",
                icono: "🚀"
            }
        ]
    },
    audi: {
        nombre: "Audi",
        modelos: [
            {
                nombre: "R8",
                tipo: "Automático",
                año: 2025,
                precio: "$2,800,000",
                icono: "🦾"
            },
            {
                nombre: "e-tron GT",
                tipo: "Eléctrico",
                año: 2025,
                precio: "$2,720,000",
                icono: "🔋"
            }
        ]
    }
}
//funcion que mostrara dinamicamente los modelos de la marca de la que se seleccione el boton
function mostrarModelos(marcaSeleccionada) {
    const contenedor = document.getElementById("modelos"); //se va a trabajar con el id=modelos dentro de un div en html
    contenedor.innerHTML = ""; // Se declara vacio cada que se inicializa para ir limpiando contenido anterior

    const marca = marcas[marcaSeleccionada]; //se crea la constante marca que va a contener el arreglo de modelos de la marca seleccionada

    // Va a ir creando el titulo dependiendo la marca seleccionada
    const titulo = document.createElement("h2"); //crea elemento de tipo h2 en html
    titulo.textContent = `Modelos de ${marca.nombre}`; //se manipula el DOM accediendo al nombre de la marca
    contenedor.appendChild(titulo); //agrega un nuevo nodo dentro de contenedor de tipo titulo

    // Recorre los modelos usando forEach
    marca.modelos.forEach(function(modelo) {
        // se crea un contenedor para tarjeta
        const tarjeta = document.createElement("div"); //crea elemento en html de tipo div
        tarjeta.classList.add("modeloCard"); // Agregar clase para estilo llamada modeloCard dentro de css

        // Agrega contenido con createElement + textContent
        const nombre = document.createElement("h3"); //crea un elemento de tipo h3
        nombre.textContent = `${modelo.nombre} ${modelo.icono}`; // se iserta contenido de texto manipulando el DOM
        tarjeta.appendChild(nombre); // crea nuevo nodo dentro de la tarjeta de tipo nombre

        const tipo = document.createElement("p"); //crea elemento de tipo p
        tipo.textContent = `Tipo: ${modelo.tipo}`;
        tarjeta.appendChild(tipo);

        const año = document.createElement("p");
        año.textContent = `Año: ${modelo.año}`;
        tarjeta.appendChild(año);

        const precio = document.createElement("p");
        precio.textContent = `Precio: ${modelo.precio}`;
        tarjeta.appendChild(precio);

        //Agrega la tarjeta generada al contenedor principal
        contenedor.appendChild(tarjeta);
    });
}