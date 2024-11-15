import React from 'react'
import "./BCard.css"
import { ArrowRight } from 'react-bootstrap-icons'
function BCard(props) {
    return (
        <div className='col-12 col-lg-4 p-3'>
            <div className='position-relative w-100'>
                <img className='w-100 rounded' src={props.img} alt="" />
                <div className='bg-white shadow m-3 rounded-3 p-2 position-absolute BCard-div-pos'>
                    <div className='w-100 d-flex gap-2 justify-content-center align-items-center mb-3'>
                        <span className='m-0 p-1 text-primary border rounded-pill txt-sm'>{props.cat}</span>
                        <span className='txt-sm text-secondary'>{props.date}</span>
                    </div>
                    <h4 className='pb-4 border-bottom m-0 mb-3 fs-5 me-3' >{props.quate}</h4>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center gap-2'>
                            <img src={props.pPic} alt="" />
                            <div>
                                <p className='m-0 fw-bold'>Admin</p>
                                <p className='m-0 text-secondary txt-sm'>Co,Founder</p>
                            </div>
                        </div>
                        <div className='p-2 bg-body-secondary d-flex justify-content-center rounded align-items-center border'>
                            <ArrowRight/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BCard