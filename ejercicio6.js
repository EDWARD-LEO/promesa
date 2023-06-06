//Funciones tradicionales
function saludar(nombre){
  return `Bienvenido ${nombre}`
}

function mostrarAmigos(){
  return ['Juan', 'Luis', 'Pedro']
}

/*
let resultado1 = saludar('Jhon')
console.log(resultado1)       //forma 1
console.log(mostrarAmigos())  //forma 2
*/

//Objeto
//Función flecha / parámetro
const perfil = {
  'apellidos'   : 'Francia Minaya',
  'nombres'     : 'Jhon Edward',
  'edad'        : 38,
  'estaCasado'  : false,
  'amigos'      : ['Lorenzo', 'César', 'Joel'],
  'contacto'    : {
    'telefonos' : ['956834915'],
    'ciudad'    : 'Chincha',
    'casaPropia': true
  },
  'skill'       : function (){
    return "Yo se programar"
  }
}

console.log(perfil.skill())