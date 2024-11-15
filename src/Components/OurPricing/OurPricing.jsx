import React from 'react'
import "./OurPricing.css"
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons'
import PCard from '../PCard/PCard'
import { Button } from 'react-bootstrap'

function OurPricing() {
    return (
        <section className='w-100 d-flex justify-content-center align-items-center mt-4 position-relative'>
            <div className='w-75 d-flex flex-column justify-content-center align-items-center'>
                <div className='text-center'>
                    <p className='main-blue'><ArrowLeft /> Our Services <ArrowRight /></p>
                    <h3>Our Awesome Pricing Plans</h3>
                </div>
                <div className='d-flex justify-content-center align-items-center flex-column flex-lg-row'>
                    <div className='rounded-pill border d-block p-2 d-lg-inline-block'>
                        <p className='m-0'><span className='bg-main-blue rounded-pill text-white p-1 text-center'>Monthly</span> Yearly</p>
                    </div>
                    <div className='d-block d-lg-inline-block'>
                        <svg width="67" viewBox="0 0 97 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Arrow 2">
                                <g id="Group 39866">
                                    <path id="Vector 210" d="M86.8061 56.022C75.6294 58.8084 62.284 59.3378 52.4617 52.3009C46.1845 47.8038 42.8513 38.7103 45.1972 31.3292C47.4127 24.3583 52.5866 18.2336 60.3395 18.4202C64.3806 18.5175 67.865 20.3768 68.6006 24.6325C69.7245 31.1344 63.2384 37.8627 58.0814 40.6909C41.9875 49.5172 19.2202 49.026 3.88876 38.7811" stroke="#384BFF" stroke-width="3" stroke-linecap="round" />
                                    <path id="Vector 219" d="M10.6465 50.79C8.77116 48.1696 4.67598 42.0563 3.29786 38.5672" stroke="#384BFF" stroke-width="3" stroke-linecap="round" />
                                    <path id="Vector 220" d="M3.29785 38.5664C6.49255 38.1449 13.7542 36.9573 17.2433 35.5792" stroke="#384BFF" stroke-width="3" stroke-linecap="round" />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <span className='main-blue'>save 25%</span>
                </div>
                <div className='w-100 my-3 row mx-0 justify-content-center align-items-center'>
                    <PCard isActive={false} />
                    <PCard isActive={true} />
                    <PCard isActive={false} />
                </div>
                <div className='w-100 bg-main-blue d-flex flex-column flex-lg-row p-3 p-lg-5 rounded-4 gap-3 justify-content-between position-relative overflow-hidden ourP-div'>
                    <img className='col-8 col-sm-5 col-lg-2 me-3' src="src/assets/imgs/ctaThumb1_1.webp" alt="" />
                    <div className='text-white col-12 col-lg-6 d-flex flex-column justify-content-center'>
                        <p className=''><ArrowLeft /> Our Services <ArrowRight /></p>
                        <h4 className=''>24/7 Expert Hosting Support Our Customers Love</h4>
                    </div>
                    <div className=' col-8 col-md-6 col-lg-4 d-flex justify-justify-content-start align-items-center me-3'>
                        <Button className='bg-white rounded-pill text-dark p-2 p-md-3 fs-sm-btn fw-bold'>TALK TO A SPECIALIST <ArrowRight /></Button>
                    </div>
                    <div>
                        <img className='cta-shape1-1 position-absolute' src="src/assets/imgs/ctaShape1_1.webp" alt="" />
                    </div>
                </div>
            </div>
            <div className='position-absolute start-0 top-50 ourP-objects'>
                <img width={150} src="src/assets/imgs/pricingShape1_1.webp" alt="" />
            </div>
            
            <div className='position-absolute diamond ourP-objects'>
                <img width={50} src="src/assets/imgs/pricingShape1_2.webp" alt="" />
            </div>

        </section>
    )
}

export default OurPricing