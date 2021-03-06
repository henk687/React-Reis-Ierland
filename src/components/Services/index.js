import React from 'react'
import Icon1 from '../../images/vliegtuig.svg'
import Icon2 from '../../images/dorp.svg'
import Icon3 from '../../images/auto.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'

const Services = () => {
    return (
        <>
            <ServicesContainer id="statistieken">
                <ServicesH1 data-aos='fade-down' data-aos-duration='2000' data-aos-once='true' data-aos-delay='200' data-aos-anchor-placements='center bottom'>Statistieken</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard data-aos='fade-right' data-aos-duration='1200' data-aos-once='true' data-aos-delay='500' data-aos-anchor-placements='center bottom'>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>Vliegreis</ServicesH2>
                        <ServicesP>Van Amsterdam is het ongeveer 1,5 uur vliegen naar Dublin</ServicesP>
                    </ServicesCard>
                    <ServicesCard data-aos='fade-right' data-aos-duration='1200' data-aos-once='true' data-aos-delay='300' data-aos-anchor-placements='center bottom'>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>Bed en Breakfast</ServicesH2>
                        <ServicesP>Tijdens onze rondreis sliepen we in 5 Bed en Breakfasts</ServicesP>
                    </ServicesCard>
                    <ServicesCard data-aos='fade-right' data-aos-duration='1200' data-aos-once='true' data-aos-delay='100' data-aos-anchor-placements='center bottom'>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>Rondreis</ServicesH2>
                        <ServicesP>We hebben ongeveer 750 km afgelegd tijdens onze rondreis.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
