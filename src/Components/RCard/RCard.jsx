import React from 'react'
import "./RCard.css"
function RCard(props) {
    return (
        <div className='col-12 col-lg-3 p-2 mt-5'>
            <div className=''>
                <div className={`${props.isActive ? "number-rcard" : "number-rcard2"} mt-4 mb-3 text-dark`}> 
                    {props.num}
                </div>
                <div className='mb-2'>
                    <h4 className='fs-5 fw-bold text-white'>{props.title}</h4>
                    <p className='text-white'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                </div>
            </div>
        </div>
    )
}

export default RCard