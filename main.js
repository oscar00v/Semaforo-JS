const luces = document.querySelectorAll('.luz');

const estados = ['red', 'yellow', 'green'];


let estado = 0;


luces[estado].classList.add('active');


function cambiarEstadoAscendente() {
luces[estado].classList.remove('active');
estado = (estado + 1) % estados.length;

luces[estado].classList.add('active');
setTimeout(cambiarEstadoAscendente, 2000);

}





cambiarEstadoAscendente();
