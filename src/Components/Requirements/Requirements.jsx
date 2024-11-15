import React from 'react'
import "./Requirements.css"
import RCard from '../RCard/RCard'

function Requirements() {
    return (
        <section className='bg-second-purple w-100 d-flex justify-content-center align-items-center'>
            <div className='py-4 w-75 row mx-0 mb-3 justify-content-center align-items-center'>
            <RCard num="01" title="Requierments" isActive={true} />
            <RCard num="02" title="UI/UX Design" isActive={false} />
            <RCard num="03" title="Prototype" isActive={true} />
            <RCard num="04" title="Development" isActive={true} />
            </div>
        </section>
    )
}

export default Requirements