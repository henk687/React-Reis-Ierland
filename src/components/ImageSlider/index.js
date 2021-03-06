import React, {useState} from 'react'
import { SliderData } from './SliderData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const ImageSlider = ({ slides }) => {
const [current, setCurrent] = useState(0)    
const length = slides.length

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
}

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
}

console.log(current)

if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
}

    return (
        <section className="slider" id="afbeeldingen" data-aos='fade-up' data-aos-duration='3000' data-aos-once='true' data-aos-delay='600' data-aos-anchor-placements='center bottom'>
            <div className="sliderwrapper">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img src={slide.image} alt="travel" className="image"/>)}    
                    </div>
                )       
            })}
            </div>
        </section>
    )
}

export default ImageSlider
