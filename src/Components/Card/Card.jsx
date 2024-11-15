import React from 'react'
import "./Card.css"
import { Button } from 'react-bootstrap'
import { ChevronDoubleRight } from 'react-bootstrap-icons'
function Card(props) {
    return (
        <div className='col-12 col-lg-3 p-2'>
            <div className='border rounded-4 p-3 bg-body-tertiary'>
                <div className='p-2 border d-inline-block m-auto rounded-3 mb-3'>
                    {props.img}
                </div>
                <div className='mb-2'>
                    <h4 className='fs-5 fw-bold'>{props.title}</h4>
                    <p className='text-secondary'>Collaboratively formulate principe capital. Prgressivley evolve user revolutionary hosting services.</p>
                </div>
                <Button className='rounded-pill border-secondary bg-transparent text-dark px-3'>Read More <ChevronDoubleRight /> </Button>
            </div>
        </div>
    )
}

export default Card