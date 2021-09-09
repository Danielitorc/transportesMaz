const formContacto = document.querySelector('.solicitud');
const mostrarCaja = document.querySelector('#asegurar');
const ocultarCaja = document.querySelector('#noAsegurar');
const siManiobras = document.querySelector('#maniobras');
const noManiobras = document.querySelector('#noManiobras');

const nombre = formContacto.nombre;
const apellidos= formContacto.apellidos;
const empresa = formContacto.empresa;
const email = formContacto.email;
const telefono = formContacto.telefono;
const unidad = formContacto.unidad;
const datosRec = formContacto.datosRec;
const datosEnt = formContacto.datosEnt;
const asegurar = formContacto.asegurar;
const maniobras = formContacto.maniobras;
const ofertas = formContacto.ofertas;
const terminos = formContacto.terminos;
const fecha = formContacto.fecha;
const hora = formContacto.hora;

let errors = document.querySelector('.errors');
let mostrar = document.querySelector('.mostrar')
let mostrarManiobras = document.querySelector('.mostrarManiobras')

formContacto.addEventListener('submit', validar);
mostrarCaja.addEventListener('input', validarAsegurar);
ocultarCaja.addEventListener('input', validarnoAsegurar);
siManiobras.addEventListener('input', validarManiobras);
noManiobras.addEventListener('input', validarnoManiobras);

deshabilitarFecha();

function validar(e){
    errors.innerHTML = '';

    validarTextos(e);
    validarOfertas(e);
    validarTerminos(e);
    validarNumeros(e);
    validarFecha(e);
    validarHora(e);
    
}


function validarTextos(e){
    e.preventDefault();
    if(nombre.value === '' || apellidos.value === '' || empresa.value === '' || email.value === '' || telefono.value === '' || datosEnt.value === '' || datosRec.value === '' || asegurar[0].checked === false && asegurar[1].checked === false || maniobras[0].checked === false && maniobras[1].checked === false || unidad.value === ''){
        errors.style.display = 'block';
        errors.innerHTML += '<li>Todos los Campos son obligatorios</li>';
    }

    setTimeout(() => {
        errors.style.display = 'none';
    }, 4000);
}


function validarAsegurar(e){
    e.preventDefault();
    if(asegurar[0].checked){
        mostrar.style.display = 'block'; 
    }
}

function validarnoAsegurar(e){
    if(asegurar[1].checked){
        mostrar.style.display = 'none';
    }
}

function validarManiobras(e){
    e.preventDefault();
    if(maniobras[0].checked){
        mostrarManiobras.style.display = 'block';
    }
}


function validarFecha(e){
    e.preventDefault();
    if(fecha.value === ''){
        errors.style.display = 'block';
        errors.innerHTML += '<li>Seleccione una fecha</li>';
    }
}

function validarHora(e){
    e.preventDefault();
    if(hora.value === ''){
        errors.style.display = 'block';
        errors.innerHTML += '<li>Seleccione una hora</li>';
    }
}

function deshabilitarFecha(){
    const fechaInput = document.querySelector('#fecha');

    const fechaAhora = new Date();
    const year = fechaAhora.getFullYear();
    let mes = fechaAhora.getMonth() + 1;
    let dia = fechaAhora.getDate() + 2;
    
    if(mes < 10){
       mes= '0' + mes;
    }
    
    if(dia < 10){
        dia = '0' + dia;
    }

    const fechaDeshabilitar = `${year}-${mes}-${dia}`;
    fechaInput.min = fechaDeshabilitar;
    
}


function validarnoManiobras(e){
    e.preventDefault();
    if(maniobras[1].checked){
        mostrarManiobras.style.display = 'none';
    }
}

function validarOfertas(e){
    e.preventDefault();
    if(!ofertas.checked){
        ofertas.value = 'No'
        console.log(ofertas)
    }
}

function validarNumeros(e, t){
    e.preventDefault();
    e = valorMercancia.value;
    t = telefono.value;
    if(!/^([0-9])*$/.test(e)){
        errors.style.display = 'block';
        errors.innerHTML += '<li>solo numeros para valor mercancia</li>';
    }if(!/^([0-9])*$/.test(t)){
        errors.style.display = 'block';
        errors.innerHTML += '<li>solo numeros para telefono</li>';
    }
}

function validarTerminos(e){
    e.preventDefault();
    if(!terminos.checked){
        errors.style.display = 'block';
        errors.innerHTML += '<li>Acepte Términos y condiciones</li>';
    }
}

