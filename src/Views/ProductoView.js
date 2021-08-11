import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { CarritoContext } from '../context/carritoContext'

import { useParams } from 'react-router'
// params pasamos parametros en la ruta
import { obtenerProductoPorId } from '../Services/productoService'
import Cargando from '../Components/Cargando'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router'

export default function ProductoView() {

    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState(true)

    const { id } = useParams()

    const history = useHistory()


    const {annadirCarrito} = useContext(CarritoContext)

    const getProducto = async () => {
        try {
            let productosObtenido = await obtenerProductoPorId(id)
            setProducto(productosObtenido)
            setCargando(false) // aqui le decimos que se termino de cargar los datos
        } catch (error) {
            console.log(error)
        }
    }

    const annadirCarritoContext = async () => {
        annadirCarrito(producto)
        const resultado = await Swal.fire({
            icon:'success',
            title:'Producto Annadido',
            showConfirmButton:'true',
            showDenyButton:'true',
            confirmButtonText:'Seguir comprando',
            denyButtonText:'Ir a carrito'
        })
        
        if(resultado.isConfirmed){
            history.push('/')
        }else if(resultado.isDenied){
            history.push('/carrito')
        }
    }

    useEffect(() => {
        getProducto()
    },[])

    return (
        <div>

            {cargando ? 
            (<Cargando />) : 
            (<div>
                <div className="container">
                    <h2 className="fw-bold">{producto.prod_nombre}</h2>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <img className="img-fluid" src={producto.prod_imagen} alt={producto.prod_nombre} />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <h5 className="fw-bold">Descripcion</h5>
                            <p>{producto.prod_descripcion}</p>
                            <div className="py-3 d-flex justify-content-between">
                                <span className="fw-bold">
                                    S/.{producto.prod_precio}
                                </span>

                                <button className="btn btn-dark btn-lg" onClick={annadirCarritoContext}>
                                <i className="fas fa-shopping-cart"> Annadir Carrito</i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}

        </div>
    )
}
