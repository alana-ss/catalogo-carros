let mensaje = "Bienvenido amante de los autos, continua para descubrir lo que tenemos para ti :) 🚗"
alert(mensaje)
const marcas= {
    porsche: {
        nombre: "Porsche", modelos: [  {
            nombre: "911 Turbo S",
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
function mostrarModelos(marcaSeleccionada) {
    const contenedor = document.getElementById("modelos");
    const marca = marcas[marcaSeleccionada];

    contenedor.innerHTML = `<h2>Modelos de ${marca.nombre}</h2>`;

    marca.modelos.forEach();
}
