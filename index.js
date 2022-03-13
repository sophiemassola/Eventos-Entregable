console.log('Entregable "Eventos"');

const boton = document.getElementById('agregar');

lista = [];

boton.onclick = e => {
    const parent = e.target.parentNode; //prop que muesta el padre de boton. En este caso es supermercado.
    prod = parent.children[1].value;
    cant = parent.children[3].value;
    lista.push(prod,cant);
    console.log(lista);
}
