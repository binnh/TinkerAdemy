import React from 'react'
import '../../styles/testimonial.css'

import Slider from "react-slick" 

import ava01 from '../../components/images/ava-1.jpg'
import ava02 from '../../components/images/ava-2.jpg'
import ava03 from '../../components/images/ava-3.jpg'

const Testimonial = () => {

        const settings ={
                dots:false,
            infinite:true,
            speed:1000,
            autoplay:true,
            autoplaySpeed:3000,
            slidesToShow:1,
            slidesToScroll:1,
            swipeToSlide:true
        }

  return <section>
        <div className="container">
            <div className="slider__content-top">
                <h6 className="subtitle">Testimonial</h6>
                <h2>Trusted by more than <span className="highlight">5,000 customers</span></h2>
            </div>

            <div className="slider__wrapper">
           
            <Slider {...settings}>
        
        <div className="slider__item">
            <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolorum porro nesciunt odio odit pariatur quod aperiam veniam facere molestias quia laboriosam necessitatibus id debitis ipsa saepe asperiores, laudantium sunt est incidunt ipsum commodi? Est rerum iste fugiat dolorem tempore!
            </p>
                <div className="customer__details">
                    <div className="customer__img">
                        <img src={ava01} alt="" />
                    </div>
                    <div>
                        <h5 className="customer__name">Jhon Doe</h5>
                        <p className="description">CEO, Workcreation</p>
                    </div>
                </div>
        </div>
        <div className="slider__item">
            <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolorum porro nesciunt odio odit pariatur quod aperiam veniam facere molestias quia laboriosam necessitatibus id debitis ipsa saepe asperiores, laudantium sunt est incidunt ipsum commodi? Est rerum iste fugiat dolorem tempore!
            </p>
                <div className="customer__details">
                    <div className="customer__img">
                        <img src={ava02} alt="" />
                    </div>
                    <div>
                        <h5 className="customer__name">sd dj</h5>
                        <p className="description">CEO, Workcreation</p>
                    </div>
                </div>
        </div>
        <div className="slider__item">
            <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolorum porro nesciunt odio odit pariatur quod aperiam veniam facere molestias quia laboriosam necessitatibus id debitis ipsa saepe asperiores, laudantium sunt est incidunt ipsum commodi? Est rerum iste fugiat dolorem tempore!
            </p>
                <div className="customer__details">
                    <div className="customer__img">
                        <img src={ava03} alt="" />
                    </div>
                    <div>
                        <h5 className="customer__name">Jhon Doe</h5>
                        <p className="description">CEO, Workcreation</p>
                    </div>
                </div>
        </div>


    
    </Slider>
            </div>

        </div>
  </section>
}

export default Testimonial