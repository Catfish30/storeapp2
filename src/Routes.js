import React from 'react'
import { Route } from 'react-router-dom'

import ProtectedRoute from './Components/ProtectedRoute'

import PortadaView from './Views/PortadaView'
import ProductoView from './Views/ProductoView'
import CarritoView from './Views/CarritoView'
import ProductosViews from './Views/ProductosViews'
import LoginView from './Views/LoginView'

import CheckoutView from './Views/CheckoutView'

export default function Routes() {
    return (
        <div>
            <Route path="/" exact component={PortadaView} />
            <Route path="/detalle/:id" exact component={ProductoView} />
            <ProtectedRoute path="/carrito" exact component={CarritoView} />
            <Route path="/productos" exact component={ProductosViews} />
            <Route path="/login" exact component={LoginView} />
            
            <ProtectedRoute path="/checkout" exact component={CheckoutView} />
        </div>
    )
}
