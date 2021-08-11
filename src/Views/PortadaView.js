import React from 'react'
import { useEffect,useState } from 'react'
import { obtenerProductos } from '../Services/productoService'
import GrupoProductos from '../Components/GrupoProductos'
import CustomCarousel from '../Components/CustomCarousel'

export default function PortadaView() {

    const [productos,setproductos] = useState([])

    const getProductos = async () => {
        try {
            let productosObtenidos = await obtenerProductos()
            setproductos(productosObtenidos)   
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProductos()
    },[])

    return (
        <div>
            <CustomCarousel />
            <GrupoProductos productos={productos} />
        </div>
    )
}
