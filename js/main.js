let nombreDeUsuario = window.prompt ("Usuario");
let contraDeUsuario = window.prompt ("Contraseña");
    if (nombreDeUsuario !== "" && contraDeUsuario !== ""){
        alert ("Inicio de sesion exitoso");
        console.log ("Inicio de sesion exitoso")
    } else {
        alert ("Su usuario y/o contraseña son incorrectos. Intente nuevamente")
    };

const productos = [
    {   "articulo" : "Remera Over Lisa",
        "categoria" : "Remeras",
        "subcategoria" : "Oversize",
        "id":1,
        "Modelo" : "Lisa Over",
        "Tela" : "Algodon",
        "Precio" : 5 + " US$",
        "Colores" : ["White", "Black", "Grey", "Blue"],
        "Talles" : ["S", "M", "L", "XL", "XXL"]
    },
    {   "articulo" : "Remera Over Skull",
        "categoria" : "Remeras",
        "subcategoria": "Oversize",
        "id":2,
        "Modelo" : "Estampa Skull",
        "Tela" : "Algodon",
        "Precio" : 5 + " US$",
        "Colores" : ["White", "Black", "Grey"],
        "Talles" : ["S", "M", "L", "XL", "XXL"]
    },
    {   "articulo" : "Remera Over Awake",
        "categoria" : "Remeras",
        "subcategoria": "Oversize",
        "id":3,
        "Modelo" : "Estampa Awake",
        "Tela" : "Algodon",
        "Precio" : 5 + " US$",
        "Colores" : ["White", "Black", "Grey"],
        "Talles" : ["S", "M", "L", "XL", "XXL"]
    },
    {   "articulo" : "Remera Over Icarus",
        "categoria" : "Remeras",
        "subcategoria": "Oversize",
        "id":4,
        "Modelo" : "Estampa Icarus",
        "Tela" : "Algodon",
        "Precio" : 5 + " US$",
        "Colores" : ["White", "Black", "Grey"],
        "Talles" : ["S", "M", "L", "XL", "XXL"]
    },
    {   "articulo" : "Remera Clasica Lisa",
        "categoria" : "Remeras",
        "subcategoria": "Clasicas",
        "id":5,
        "Modelo" : "Lisa",
        "Tela" : "Algodon",
        "Precio" : 5 + " US$",
        "Colores" : ["White", "Black", "Grey", "Blue"],
        "Talles" : ["S", "M", "L", "XL", "XXL"]
    },
    {   "articulo" : "Jean Mom",
        "categoria" : "Jeans",
        "subcategoria": "Moms",
        "id":6,
        "Modelo": "Mom",
        "Tela" : "Mezclilla",
        "Precio": 10 + " US$",
        "Colores": ["Black", "Grey", "Blue"],
        "Talles" : [38, 40, 42, 44, 46, 48]
    },
    {   "articulo" : "Jean Recto",
        "categoria" : "Jeans",
        "subcategoria": "Rectos",
        "id":7,
        "Modelo": "Recto",
        "Tela" : "Mezclilla",
        "Precio": 10 + " US$",
        "Colores": ["Black", "Grey", "Blue"],
        "Talles" : [38, 40, 42, 44, 46, 48]
    },
    {   "articulo" : "Jean Skinny",
        "categoria" : "Jeans",
        "subcategoria": "Skinnys",
        "id":8,
        "Modelo": "Skinny",
        "Tela" : "Mezclilla",
        "Precio": 10 + " US$",
        "Colores": ["Black", "Grey", "Blue"],
        "Talles" : [38, 40, 42, 44, 46, 48]
    },
    {   "articulo" : "Hoodie",
        "categoria" : "Hoodies",
        "id":9,
        "Modelo" : "Liso",
        "Tela" : "Algodon",
        "Precio" : 8 + " US$",
        "Colores" : ["White", "Black", "Grey", "Blue"],
        "Talles" : ["S", "M", "L", "XL", "XXL"]
    },
    {   "articulo" : "Campera Puffer",
        "categoria" : "Camperas",
        "id":10,
        "Modelo" : "Puffer",
        "Tela" : "Polyester",
        "Precio" : 10 + " US$",
        "Colores" : ["White", "Black", "Grey", "Blue", "Red"],
        "Talles" : ["S", "M", "L", "XL", "XXL"]
    }
    ];

function agregarAlCarrito(prenda){
    let confirmacion = parseInt(prompt("Desea agregar el producto al carrito \n 1. Si \n 2. No"));
    if (confirmacion == 1 ){
    carrito.push (JSON.stringify(prenda));
    alert(carrito);}
    };

let carrito = [];

const categoria = [
    "Remeras", "Jeans", "Hoodies", "Camperas"
]
const subcategoria = [
    "Oversize", "Clasicas", "Moms", "Rectos", "Skinnys"
]
function seleccionarCategoria (){
    let seleccion = parseInt(prompt ("Elija una categoria \n" + "1. " + categoria[0] + "\n" + "2. " + categoria[1] + "\n" + "3. " + categoria[2] + "\n" + "4. " + categoria [3]));
    if (seleccion === 1 ) {
        let seleccionSubCategoria = parseInt(prompt("Seleccione una sub-categoria \n" + "1. " + subcategoria[0] + "\n" + "2. " + subcategoria[1]));
        if (seleccionSubCategoria === 1) {
            let seleccionRemeraOver = parseInt(prompt("Elija una prenda \n" + "1. " + productos[0].articulo + "\n" + "2. " + productos[1].articulo
            + "\n" + "3. " + productos[2].articulo + "\n" + "4. " + productos[3].articulo));
            switch (seleccionRemeraOver){
                case 1 : agregarAlCarrito(productos[0]);
                break;
                case 2 : agregarAlCarrito(productos[1]);
                break;
                case 3 : agregarAlCarrito(productos[2]);
                break;
                case 4 :agregarAlCarrito(productos[3]);
            }
           } else if (seleccionSubCategoria === 2){
            prompt(productos[4].articulo);
            agregarAlCarrito(productos[4]);
           }
        
    } else if (seleccion === 2 ){
        let seleccionSubCategoria = parseInt(prompt("Seleccione una sub-categoria \n" + "1. " + subcategoria[2] + "\n" + "2. " + subcategoria[3]
        + "\n" + "3. " + subcategoria[4]));
        switch (seleccionSubCategoria){
            case 1 : agregarAlCarrito(productos[5]);
            break;
            case 2 : agregarAlCarrito(productos[6]);
                break;
            case 3 : agregarAlCarrito(productos[7]);
        }
     }
     else if (seleccion === 3) {
        agregarAlCarrito(productos[8]);
     }
     else if (seleccion === 4){
        agregarAlCarrito(productos[9]);
     }
}   
seleccionarCategoria();


