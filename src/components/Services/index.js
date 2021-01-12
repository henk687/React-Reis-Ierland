import React from 'react'
import Icon1 from '../../images/vliegtuig.svg'
import Icon2 from '../../images/dorp.svg'
import Icon3 from '../../images/auto.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'

const Services = () => {
    return (
        <>
            <ServicesContainer id="statistieken">
                <ServicesH1>Statistieken</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>Vliegreis</ServicesH2>
                        <ServicesP>Van Amsterdam is het ongeveer 1,5 uur vliegen naar Dublin</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>Bed en Breakfast</ServicesH2>
                        <ServicesP>Tijdens onze rondreis sliepen we in 5 Bed en Breakfasts</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
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
