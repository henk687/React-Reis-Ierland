import React, { useState } from "react";
import Video from '../../videos/reisierland.mp4'
import {Button} from '../ButtonElements'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowDownward, ArrowDown} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };


    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='reisierland/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1 data-aos='fade-down' data-aos-duration='1000' data-aos-once='true' data-aos-delay='250' data-aos-anchor-placements='center bottom'>Ierland</HeroH1>
                <HeroP data-aos='fade-down' data-aos-duration='1500' data-aos-once='true' data-aos-delay='250' data-aos-anchor-placements='center bottom'>
                    Rondreis 2018
                </HeroP>
                <HeroBtnWrapper data-aos='zoom-out' data-aos-duration='1000' data-aos-once='true' data-aos-delay='250' data-aos-anchor-placements='center bottom'>
                    <Button 
                        to='bestemming' 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                        Beginnen {hover ? <ArrowDownward/> : <ArrowDown/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
