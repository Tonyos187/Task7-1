import React from 'react'
import "./Testimonials.css"
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons'
import TCard from '../TCard/TCard'

function Testimonials() {
    const text1 = "Extech has completely transformed our process. The user-friendly interface and powerful features maintaining our website. Highly recomended for all!"
    const text2 = "I've been using Extech for several months now, and i'm extremely impressed with the ease of customization it offers. The wide range of templates."
    const text3 = "Extech offers exceptional value for money. The comprehensive suite of tools and seamless integration with various plugins and services make it a for all!"
    
    const img1 = "src/assets/imgs/testiThumb3_1.webp"
    const img2 = "src/assets/imgs/testiThumb3_2.webp"
    const img3 = "src/assets/imgs/testiThumb3_3.webp"

    return (
        <section className='bg-body-tertiary w-100 d-flex justify-content-center align-items-center pt-5'>
            <div className='w-75 d-flex flex-column justify-content-center align-items-center pt-5'>
                <div>
                    <div className='text-center mt-5'>
                        <p className='text-primary'><ArrowLeft /> Testimonials <ArrowRight /></p>
                        <h3>Our Latest Client Feedback</h3>
                    </div>
                    <div className='w-100 my-3 row mx-0 justify-content-center align-items-center gy-5'>
                        <TCard isActive={true} text={text1} img={img1} name="Kristin Watson" job="Web Designer"/>
                        <TCard isActive={false} text={text2} img={img2} name="Theresa Webb" job="Tech enthusiast"/>
                        <TCard isActive={true} text={text3} img={img3} name=" Ronald Richards" job="Web Enterprenuor"/>
                    </div>
                    <div className=' bg-body-secondary rounded-pill  TCards-bot mx-auto d-flex justify-content-center mb-5'>
                        <div className='bg-main-blue w-25 h-100 rounded-pill p-2'>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials