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
            icono: "⚡",
            imagen:  "img/porsche-911.jfif"
        },
        {
            nombre: "911 gt3 rs",
            tipo: "Estandar",
            año: 2025,
            precio: "$4,150,000",
            icono: "🏎️",
            imagen:"img/porsche-gt3.jfif" //se declara la propiedad de imagen de la marca con su ruta 
        }]
    }, 
    corvette: {
        nombre: "Corvette",
        modelos: [
            {
                nombre: "Stingray",
                tipo: "Estándar",
                año: 2024,
                precio: "$6,555,000",
                icono: "🔥",
                imagen:"img/stingray.jfif"
            },
            {
                nombre: "Z06",
                tipo: "Automático",
                año: 2025,
                precio: "$5,870,000",
                icono: "🚀",
                imagen:"img/z06.jfif"
            }
        ]
    },
    audi: {
        nombre: "Audi",
        modelos: [
            {
                nombre: "R8",
                tipo: "Automático",
                año: 2023,
                precio: "$2,800,000",
                icono: "🦾",
                imagen: "img/r8.jfif"
            },
            {
                nombre: "e-tron GT",
                tipo: "Eléctrico",
                año: 2025,
                precio: "$2,720,000",
                icono: "🔋",
                imagen: "img/e-tronGt.jfif"
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

        //se crea contenedor para la imagen del modelo
        const divImagen = document.createElement("div");
        divImagen.classList.add("contenedorImagen");
        
        // se crea la imagen
        const imagen = document.createElement("img");
        imagen.src = modelo.imagen; // ← usa la ruta local
        imagen.alt = modelo.nombre;
        imagen.classList.add("modeloImagen");
        
        // Insertar imagen en el contenedor
        divImagen.appendChild(imagen);
        tarjeta.appendChild(divImagen);

        // Agrega contenido con createElement + textContent
        const nombre = document.createElement("h3"); //crea la constante nombre dentro de una etiqueta de tipo h3
        nombre.textContent = `${modelo.nombre} ${modelo.icono}`; // se iserta contenido de texto manipulando el DOM usando templates literarios
        tarjeta.appendChild(nombre); // crea nuevo nodo dentro de la tarjeta de tipo nombre

        const tipo = document.createElement("p"); //crea la constante tipo dentro de una etiqueta p
        tipo.textContent = `Tipo: ${modelo.tipo}`; // dentro de tipo se inserta texto que contiene el tipo del modelo
        tarjeta.appendChild(tipo); //dentro de la tarjeta se crea un nodo con el contenido de tipo

        const año = document.createElement("p"); // se itera el procedimiento usado para el tipo
        año.textContent = `Año: ${modelo.año}`;
        tarjeta.appendChild(año);

        const precio = document.createElement("p"); // se itera el procedimiento usado para el tipo
        precio.textContent = `Precio: ${modelo.precio}`;
        tarjeta.appendChild(precio);

        //Agrega la tarjeta generada al contenedor principal
        contenedor.appendChild(tarjeta);
    });
}

//Funcion que obtiene todos los modelos de cada marca
function obtenerTodosLosModelos() {  // con esta funcion vamos a guardar todos los modelos de todas las marcas dentro de un solo arreglo para poder mostrarlos
    let todos = []; //se declara el arreglo donde se guardaran
    for (const clave in marcas) {  //se declara una constante clave que sera una propiedad de cada objeto en marcas
        todos = todos.concat(marcas[clave].modelos); //se usa la funcion .contact para ir extrayendo de cada marca su modelo y unirlos sin modificarlos
    }
    return todos; //retorna el arreglo que contiene todos los modelos de las marcas
}

// Muestra en el DOM los modelos filtrados
function mostrarModelosFiltrados(listaModelos) {
    const contenedor = document.getElementById("modelos"); // trabaja con el id=modelos en el html
    contenedor.innerHTML = ""; // Limpia antes de mostrar

    if (listaModelos.length === 0) { //verifica si la lista se encuentra vacia
        const mensaje = document.createElement("p"); 
        mensaje.textContent = "No se encontraron modelos con ese filtro."; //si esta vacia crea dentro de una etiqueta p un mensaje 
        contenedor.appendChild(mensaje); //crea un nuevo nodo dentro del contenedor con el mensaje generado
        return;
    }

    listaModelos.forEach(modelo => { // usando forEach se crea una tarjeta con una etiqueta div 
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("modeloCard"); //dentro de la clase tarjeta se va agregando la tarjeta de cada modelo

        const nombre = document.createElement("h3");
        nombre.textContent = `${modelo.nombre} ${modelo.icono}`; //manipulando el DOM se crea el nombre y el icono
        const imagen = document.createElement("img"); //crea un elemento dentro del html de tipo img
        imagen.src = modelo.imagen; //se crea la ruta para la imagen
        imagen.alt = modelo.nombre; //se crea el nombre de la imagen
        imagen.classList.add("modeloImagen"); //agraga la clase modeloImagen dentro de imagen
        tarjeta.appendChild(imagen); //crea el nuevo nodo de imagen dentro de la tarjeta del modelo

        tarjeta.appendChild(nombre); //dentro de la tarjeta con appendChild crea un nuevo nodo con lo que se creo

        const tipo = document.createElement("p"); //se crea una costante tipo que ira creando etiquetas p
        tipo.textContent = `Tipo: ${modelo.tipo}`; //con el DOM se extrae el tipo de cada modelo
        tarjeta.appendChild(tipo); //dentro de la tarjeta se crea un nuevo nodo con el tipo

        const año = document.createElement("p"); //se repite el procedimiento que el tipo
        año.textContent = `Año: ${modelo.año}`;
        tarjeta.appendChild(año);

        const precio = document.createElement("p"); //se repite el procedimiento que el tipo
        precio.textContent = `Precio: ${modelo.precio}`;
        tarjeta.appendChild(precio);

        contenedor.appendChild(tarjeta); //con appendChild crea un nuevo nodo con todo el contenido de la tarjeta dentro de contenedor
    });
}

// Filtrar por precio
function filtrarPorPrecio(condicion) { //la funcion obtiene como parametro la condicion
    const todos = obtenerTodosLosModelos(); //se obtienen todos los modelos de las marcas con la funcion
    const filtrados = todos.filter(modelo => {  //se crea una constante "filtrados" que obtiene todos los modelos en un arreglo y recorre y filtra el arreglo con .filter
        const precioNum = parseInt(modelo.precio.replace(/\$|,/g, "")); //obtiene el precio a solo un numero usando parseInt y elimina el signo de pesos y las comas con la funcion .replace
        return condicion === "menor" ? precioNum < 3000000 : precioNum >= 3000000; //se da la condicion a cumplir para poder filtrar usando operadores ternearios y si cumple que sea "menor"
    });
    mostrarModelosFiltrados(filtrados); //muestra los modelos filtrados que cumplen con la condicion dada
}

// Filtrar por año
function filtrarPorAño(año) { //funcion que obtiene los modelos dependiendo su año y recibe como parametro año
    const todos = obtenerTodosLosModelos(); //obtiene todos los modelos de las marcas
    const filtrados = todos.filter(modelo => modelo.año === año);  //se crea la constante que va a obtener los modelos del arreglo que cumplen con la condicion donde el año dado sea igual al año del modelo 
    mostrarModelosFiltrados(filtrados); //muestra los modelos que cumplen con la condicion
}

// Filtrar por tipo de transmisión
function filtrarPorTipo(tipo) { //funcion que filtra por el tipo de transmision del modelo y recibe como parametro el tipo 
    const todos = obtenerTodosLosModelos(); //obtiene el arreglo con todos los modelos de las marcas
    const filtrados = todos.filter(modelo => modelo.tipo === tipo); //se guardan dentro de la constante filtrados recorre y filtra los modelos que cumplen con la condicion dada
    mostrarModelosFiltrados(filtrados); //muestra los modelos filtrados que cumplieron con la condicion
}

// Mostrar todos los modelos sin filtro
function mostrarTodos() {
    const todos = obtenerTodosLosModelos(); //obtiene el arreglo con todos los modelos de las marcas disponibles
    mostrarModelosFiltrados(todos); //muestra todos los modelos de las marcas
}


function calcularPromedioPrecios(modelos) { //funcion que calculapromedio de los precios
    if (modelos.length === 0) return 0; //agrega condicional si el arreglo de modelos esta vacio
    const precios = modelos.map(m => parseInt(m.precio.replace(/\$|,/g, ""))); //a la constante precios se va mapeando cada 
    //modelo en donde se aplica la misma funcion que el filtrar precio para eliminar las comas y el signo de pesos 
    const total = precios.reduce((suma, precio) => suma + precio, 0); //dentro de la constante total y usando la funcion de .reduce que obtiene suma y precio una sola cantidad obtenida de la suma de los precios
    return Math.round(total / modelos.length); //usando math.round va a redondear la cantidad total entre en numero de modelos para obtener el promedio
}

function mostrarPromedios() { //funcion para mostrar los promedios
    const promedioGeneral = document.getElementById("promedioGeneral"); //va a trabajar unicamente con el promedio general
    const contenedorPorMarca = document.getElementById("promediosPorMarca"); //trabaja con el promedio por marca especifica

    if (!promedioGeneral || !contenedorPorMarca) { //se crea condicional para verificar que existan los elementos dentro del html y evitar errores
        console.error("No se encontró el contenedor de promedios en el HTML");
        return;
    }

    const todos = obtenerTodosLosModelos(); //se obtiene todos los modelos que existen con la funcion y se guardan en la constante todos
    const promedioTotal = calcularPromedioPrecios(todos); //dentro de la constante de promedios totales se va a guardar el promedio de los precios que recibe como parametro todos los modelos
    promedioGeneral.textContent = ` Promedio general de todos los modelos: $${promedioTotal.toLocaleString()}`; // dentro del promedio general muestra el promedio general de los modelos usando textContent y templates literarios

    contenedorPorMarca.innerHTML = ""; //limpia el contenido de el contenedor por cada marca
    //for para calcular el promedio de precio por marca
    for (const clave in marcas) { //usa un for donde se declara la constante clave para cada elemento en marcas
        const modelos = marcas[clave].modelos; //se usa la constante modelos para acceder al contenido de la clave de marca y a sus modelos
        const promedioMarca = calcularPromedioPrecios(modelos); //dentro de la constante promedioMarca se guarda el promedio de los modelos

        const parrafo = document.createElement("p"); //dentro de la constante parrafo  se crea una etiquta p
        parrafo.textContent = ` Promedio de ${marcas[clave].nombre}: $${promedioMarca.toLocaleString()}`; //con textContent dentro de la etiqueta p con templates literios muestra el promedio del precio por marca
        //y usando .toLocaleString() mantiene el formato original con el que se muestra el precio
        contenedorPorMarca.appendChild(parrafo); //se crea un nuevo nodo de parrafo dentro del contenedor por marca
    }
}

