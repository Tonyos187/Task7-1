import React from 'react'
import "./TCard.css"
import { Star, StarFill } from 'react-bootstrap-icons'
function TCard(props) {
    return (
        <div className='col-12 col-lg-4'>
            <div className={`rounded-4 p-1 shadow-sm ${props.isActive ? "bg-white" : "bg-main-blue"}`}>
                <div className='rounded-4 p-2'>
                    <div className="mb-3">
                        <div className='d-flex gap-1 mb-3'>
                            <StarFill color='orange' />
                            <StarFill color='orange' />
                            <StarFill color='orange' />
                            <StarFill color='orange' />
                            <Star color='orange' />
                        </div>
                        <p className={`fs-TCard ${props.isActive ? "text-secondary" : "text-white"}`}>
                            "{props.text}"
                        </p>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex gap-2 align-items-center '>
                                <img width={50} src={props.img} alt="" />
                                <div>
                                    <p className={`m-0 fw-bold ${props.isActive ? "text-dark" : "text-white"}`}>{props.name}</p>
                                    <p className={`m-0 fs-TCard ${props.isActive ? "text-secondary" : "text-light"}`}>{props.job}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default TCard