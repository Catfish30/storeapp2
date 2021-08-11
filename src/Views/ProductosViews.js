import React from 'react'
import { useState, useEffect,useRef } from "react";

import { obtenerProductos } from "../Services/productoService";
import Cargando from "../Components/Cargando";
import GrupoProductos from '../Components/GrupoProductos';
import Slider from '@material-ui/core/Slider';


export default function ProductosViews() {

    const [productos,setProductos] = useState([])
    const [productosOriginal,setProductosOriginal] = useState([])
    const [cargando,setCargando] = useState(true)
    const [filtroPrecio,setFiltroPrecio] = useState([1,150])

    const inputBusqueda = useRef()


    const getProductos = async () => {
        try {
            const productosObtenidos = await obtenerProductos()
            setProductos(productosObtenidos)
            setProductosOriginal(productosObtenidos)
            setCargando(false)
        } catch (error) {
            console.log(error)
        }
    }


    const manejarPrecio = (evento,nuevosPrecios) => {
        setFiltroPrecio(nuevosPrecios)
    }

    const ejecutarBusqueda = async () => {
        // console.log(inputBusqueda.current.value)
        let miBusqueda = inputBusqueda.current.value
        const productosFiltrados = await obtenerProductos(miBusqueda)
        console.log(productosFiltrados)
    }

    useEffect(() => {
        getProductos()
    },[])

    useEffect(() => {
        let productosFiltrados = productosOriginal.filter((prod) => {
            return prod.prod_precio >= filtroPrecio[0] && prod.prod_precio <= filtroPrecio[1]
        })

        setProductos(productosFiltrados)

    },[filtroPrecio])

    return (
        <div>   
            {cargando ? 
            (<Cargando />) :
            (<div>
                <div className="container text-center">
                    <h1 className="my-4">
                        <i className="fas fa-gifts me-3"></i>
                        Nuestros Productos
                    </h1>
                    <div className="row my-2">
                        <div className="col-sm-12 col-md-6">
                            <h5>Filtros</h5>
                            <Slider value={filtroPrecio} onChange={manejarPrecio} valueLabelDisplay="auto" min={1} max={150}>

                            </Slider>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <h5>Filtro por nombre</h5>
                            <div className="d-flex gap-1">
                            <input className="form-control" type="text" placeholder="Ingrese el nombre o descripcion" ref={inputBusqueda} />
                            <button className="btn btn-dark" onClick={ejecutarBusqueda}>
                                <i className="fas fa-search"></i>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
                <GrupoProductos productos={productos} />
            </div>)}
        </div>
    )
}
