import React, {useState, useEffect} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import ImageSlider from '../components/ImageSlider'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar'
import { SliderData } from '../components/ImageSlider/SliderData'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        Aos.init({})
      }, [])

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <Services />
            <ImageSlider slides={SliderData}/>   
            <Footer />
        </>
    )
}

export default Home
