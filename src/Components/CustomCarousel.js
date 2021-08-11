import React from 'react'

import {Carousel} from 'react-bootstrap'

import foto1 from '../assets/asd.png'
import foto2 from '../assets/qwe.jpg'
import foto3 from '../assets/zxc.jpg'

export default function CustomCarousel() {
    return (

        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={foto1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={foto2}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={foto3}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>


    )
}
