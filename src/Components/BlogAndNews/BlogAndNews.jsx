import React from 'react'
import "./BlogAndNews.css"
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons'
import BCard from '../BCard/BCard'
import { Button } from 'react-bootstrap'

function BlogAndNews() {
    const img1 = "src/assets/imgs/blogThumb1_2.webp"
    const img2 = "src/assets/imgs/blogThumb1_3.webp"
    const img3 = "src/assets/imgs/blogThumb1_1.webp"

    const pPic1 = "src/assets/imgs/blogProfile1_2.webp"
    const pPic2 = "src/assets/imgs/blogProfile1_3.webp"
    const pPic3 = "src/assets/imgs/blogProfile1_3.webp"

    return (
        <section className='w-100 d-flex justify-content-center align-items-center mt-4'>
            <div className='w-75 main-div-width p-2'>
                <div className='d-block d-lg-flex justify-content-between'>
                    <div className='col-12 col-lg-5 mb-2'>
                        <p className='text-primary'><ArrowLeft /> BLOG & News <ArrowRight /></p>
                        <h3>Featured News And Insights</h3>
                    </div>
                    <div className='d-flex align-self-end gap-1'>
                        <div className='d-flex justify-content-center align-items-center p-2 bg-white shadow-sm rounded-circle'>
                            <ArrowLeft />
                        </div>
                        <div className='d-flex justify-content-center align-items-center p-2 bg-primary rounded-circle text-white'>
                            <ArrowRight />
                        </div>
                    </div>
                </div>

                <div className='w-100 mt-3 row mx-0 mb-5 gy-4 justify-content-center align-items-center'>
                    <BCard img={img1} cat="Uncategorized" date="MARCH14, 2024" quate="Best And Fastest Data Sever Ever" pPic={pPic1} />
                    <BCard img={img2} cat="Technology" date="MARCH29, 2024" quate="Life Won't One Beast Air Over Above All" pPic={pPic2} />
                    <BCard img={img3} cat="Shared Hosting" date="MARCH14, 2024" quate="Attentive Was Born In 2015 Help Sales Teams" pPic={pPic3} />
                </div>
                <div className='position-relative w-100 '>
                    <div className='w-100 bg-main-blue d-flex flex-column flex-lg-row rounded-4 gap-3 justify-content-between position-relative overflow-hidden Blog-div z-2'>
                        <div className='col-12 col-lg-5'></div>
                        <div className='text-white col-12 col-lg-4 d-flex flex-column justify-content-center p-3'>
                            <h4 className=''>Stay Connected With Cutting Edge IT</h4>
                        </div>
                        <div className=' col-8 col-md-6 col-lg-4 d-flex justify-justify-content-start align-items-center mx-3'>
                            <Button className='bg-white rounded-pill text-dark p-2 p-md-3 fs-sm-btn fw-bold'>TALK TO A SPECIALIST <ArrowRight /></Button>
                        </div>
                        <div>
                            <img className='cta-shape1-1 position-absolute' src="src/assets/imgs/ctaShape1_1.webp" alt="" />
                        </div>
                    </div>
                    <img className='position-absolute Blog-pic' src="src/assets/imgs/ctaThumb.webp" alt="" />
                </div>
            </div>
        </section>
    )
}

export default BlogAndNews