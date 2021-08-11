import React from 'react'

export default function Cargando() {

    return (
        <div style={{
            position:'fixed',
            top:'0',
            left:'0',
            width:'100vw',
            height:'100vh',
            zIndex:99,
            backgroundColor:'white'
        }}>
            <i 
                class="fas fa-spinner fa-spin fa-5x"
                style={{
                    color:'slateblue',
                    position:'absolute',
                    top:'calc(50% - 50px)',
                    left:'calc(50% - 50px)',
                }}
                />
        </div>
    )
}
