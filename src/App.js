import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import axios from 'axios';

import Header from "./components/Header";
import Productos from "./components/Productos";
import EditarProducto from "./components/EditarProducto";
import AgregarProducto from "./components/AgregarProducto";
import Producto from "./components/Producto";

function App() {

    const [productos, guardarProductos] = useState([]);
    const [recargarProducto, guardarRecargarProducto] = useState(true);

    useEffect(() => {
        if(recargarProducto){
            const consultarApi = async () => {
                const resultado = await axios('http://localhost:4000/restaurant');
                guardarProductos(resultado.data);
            }
            consultarApi();
            guardarRecargarProducto(false);
        }
    },[recargarProducto]);

    return (
        <Router>
            <Header/>
            <main className="container mt-5">
                <Switch>
                    <Route
                        exact path="/productos"
                        render={() => (
                            <Productos
                                productos={productos}
                                guardarRecargarProducto={guardarRecargarProducto}
                            />
                        )}/>
                    <Route
                        exact path="/nuevo_producto"
                        render={() => (<AgregarProducto guardarRecargarProducto={guardarRecargarProducto}/>)}
                    />
                    <Route exact path="/productos/:id" component={Producto}/>
                    <Route
                        exact path="/productos/editar/:id"
                        render={props => {
                            const idProducto = parseInt(props.match.params.id, 10);
                            const producto = productos.filter(producto => producto.id === idProducto);
                            return (
                                <EditarProducto
                                    producto={producto[0]}
                                    guardarRecargarProducto={guardarRecargarProducto}
                                />)
                        }}
                    />
                </Switch>
            </main>
            <p className="mt-4 text-center">Todos los derechos reservados</p>
        </Router>
    );
}

export default App;
