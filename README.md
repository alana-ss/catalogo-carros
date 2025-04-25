# 🚗 Catálogo de Carros Deportivos

Este proyecto es una página web interactiva que muestra un catálogo de carros deportivos de las marcas Porsche, Corvette y Audi.

El catalogo se va a organizar de la siguiente manera
-3 marcas disponibles: Porsche, Corvette, Audi
-2 modelos por marca que contendran cada uno: nombre, tipo, año, precio, icono
-Botones para filtrar los modelos dependiento su tipo de transmision, año y precio


Funciones Principales
-Se usa una funcion para mostrar dinamicamente los modelos de la marca seleccionada
´´´ function mostrarModelos(marcaSeleccionada)´´´

-Tambien se usa la siguiente funcion para poder obtener unicamente los modelos de todas las marcas y guardarlas en un solo arreglo son modificar su estructura 
´´´
function obtenerTodosLosModelos() 
´´´
-Con la funcion siguiente se van a ir filrando los modelos de acuerdo a las condiciones que el usuario elija
´´´
function mostrarModelosFiltrados(listaModelos)
´´´
-Con las siguientes funciones se obtiene un promedio de los precios por cada modelo existente asi como para cada marca y despues se muestra 

´´´
function calcularPromedioPrecios(modelos)
function mostrarPromedios()
´´´


Uso de Estilos 
Dentro del CSS se implementan los estilos para hacer mejoras visuales implementando lo aprendido mas width y display para ordenar las tarjetas creadas para cada modelo 

Tambien se usan estilos diferentes para los botones de los filtros de busqueda

Se impelentan nuevas funciones que nos permiten adecuar una imagen dentro de un elemento ya existente y que se vea esteticamente visualmente


Herramientas Usadas
HTML 
JavaScript
CSS
README.md
Carpeta de imagenes 

Aprendizaje
Manipulacion de DOM
Uso de Templates literarios
implementacion de condicionales
Uso de .contact, .parseInt, .replace, .filter, .add, .appendChild, .createElement, .textContent de forma correcta
Implementacion de imagenes asi como modificacion de su estilo desde css con el uso de display, overflow, aling.items y justify content para mejoras visuales 

