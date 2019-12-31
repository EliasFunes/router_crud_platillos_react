import React, {Fragment} from 'react';
import ProductoLista from "./ProductoLista";

const Productos = ({productos, guardarRecargarProducto}) => {
    return (
        <Fragment>
            <h1 className="text-center">Productos</h1>
            <ul className="list-group mt-5">
                {productos.map(producto => (
                    <ProductoLista
                        key={producto.id}
                        producto={producto}
                        guardarRecargarProducto={guardarRecargarProducto}
                    />
                ))}
            </ul>
        </Fragment>




    );
};

export default Productos;
