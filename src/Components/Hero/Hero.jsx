import React from 'react'
import { Button } from 'react-bootstrap'
import { ArrowRight, Star } from 'react-bootstrap-icons'
import "./Hero.css";




function Hero() {
    return (
        <section className='hero w-100 pt-4 px-0 p-lg-4'>
            <div className='background-hero rounded-start-5 rounded-top-5 position-relative row justify-content-center w-auto h-100 align-items-center flex-row-reverse'>
                <div className='hero-img-div bg-main-blue rounded-4 right-hero-div-bg col-12 col-lg-6 d-flex justify-content-center'>
                    <img className='img-fluid h-100' src="src/assets/imgs/heroThumb1_1.webp" alt="" />
                </div>
                <div className='hero-text-div bg-main-blue rounded-4 left-hero-div-bg col-12 col-lg-6 d-flex flex-column gap-2 justify-content-center align-items-center'>
                    <div className='w-75' >
                        <p className='text-white text-capitalize border rounded-pill d-inline-block p-2 fw-bold w-max-content'>everything you need to create a website</p>
                        <h1 className='text-white mb-3'>Business Innovation With IT Services Expertise</h1>
                        <div className='text-white d-flex gap-2 w-max-content'>
                            <div className='d-flex gap-2 flex-column w-max-content'>
                                <p className='m-0'>Deployment and Support</p>
                                <p className='m-0'>Discovery and Analysis</p>
                            </div>
                            <div className='text-white d-flex gap-2 flex-column w-max-content'>
                                <p className='m-0'>Flexibility and Adaptability</p>
                                <p className='m-0'>Competetive Advantage</p>
                            </div>
                        </div>
                        <Button className='text-white mt-3 orange-bg rounded-pill w-max-content mb-5'>Get Started <ArrowRight /></Button>
                        <div className=' p-2 position-absolute bottom-0 col-9 col-lg-4 d-flex rounded-top-4 border'>
                            <div className='col-6'>
                                <h4 className='text-white fs-6'>Trustipilot</h4>
                                <div className='d-flex'>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <img className='img-fluid w-75' src="src/assets/imgs/profileShape1_1.webp" alt="" />
                                    </div>
                                    <div className='d-flex flex-column gap-1 text-white'>
                                        <div className='text-white d-flex'>
                                        <Star /><Star /><Star />
                                        </div>
                                        <span className='text-white'>450+ reviews</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 border-start ps-2'>
                                <h4 className='text-white fs-6'>Trustipilot</h4>
                                <div className='d-flex'>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <img className='img-fluid w-75' src="src/assets/imgs/profileShape1_1.webp" alt="" />
                                    </div>
                                    <div className='d-flex flex-column gap-1 text-white'>
                                    <div className='d-flex'>
                                        <Star/><Star/><Star/>
                                        </div>
                                        <span className='text-white'>450+ reviews</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='bg-white position-absolute p-2 w-auto bottom-0 start-50 translate-md-neg rounded-thingy'>
                    <img className='img-fluid circle-thingy' src="src/assets/imgs/heroShape1_3.webp" alt="" />
                </div>
                <div className='bg-main-blue position-absolute w-25 h-25 bottom-thingy start-50 translate-md-neg'></div>
            </div>
        </section>
    )
}

export default Hero