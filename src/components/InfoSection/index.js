import React, {useState} from 'react'
import { Button } from '../ButtonElements'
import { Modal } from '../Modal'
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2, display}) => {
    
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1 data-aos='fade-up' data-aos-duration='1000' data-aos-once='true' data-aos-delay='250' data-aos-anchor-placements='center bottom'>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap display={display}>
                                    <Button 
                                    to="home"
                                    onClick={openModal}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} data-aos='zoom-out'  data-aos-duration='1000' data-aos-once='true' data-aos-delay='250' data-aos-anchor-placements='center bottom'/>
                            </ImgWrap>
                        </Column2>
                        <Modal showModal={showModal} setShowModal={setShowModal} />
                    </InfoRow>
                </InfoWrapper>
                
            </InfoContainer>
        </>
    )
}

export default InfoSection
