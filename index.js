console.log('Entregable "Eventos"');

const boton = document.getElementById('agregar');


class Productos{
    constructor (nombre, cantidad){
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
}


boton.onclick = e => {
    const parent = e.target.parentNode; //prop que muesta el padre de boton. En este caso es supermercado.
    let nombre = parent.children[1].value;
    let cantidad = parent.children[3].value;
    let ingreso = new Productos (nombre, cantidad);
    let listado = document.createElement("li");
    listado.innerHTML = `${nombre} = ${cantidad} unidades`;
    document.body.append(listado);
    
    //lista.push(Productos);
    //console.log(ingreso);
}
