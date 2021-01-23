import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, 
SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, FooterLinkSocial} from './FooterElements'
import {FaInstagram} from 'react-icons/fa'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Navigatie</FooterLinkTitle>
                                    <FooterLink 
                                        to="bestemming"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact='true'
                                        offset={-80}
                                    >
                                        Bestemming
                                    </FooterLink>
                                    <FooterLink 
                                        to="route"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact='true'
                                        offset={-80}
                                    >
                                        Route
                                    </FooterLink>
                                    <FooterLink 
                                        to="geluk"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact='true'
                                        offset={-80}
                                    >
                                        Geluk
                                    </FooterLink>
                                    <FooterLink 
                                        to="statistieken"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact='true'
                                        offset={-80}
                                    >
                                        Statistieken
                                    </FooterLink>
                                    <FooterLink 
                                        to="afbeeldingen"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact='true'
                                        offset={-80}
                                    >
                                            Afbeeldingen
                                    </FooterLink>          
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLinkSocial href="https://www.instagram.com/awesomevietnamtravel/?hl=nl" target="_blank">Instagram</FooterLinkSocial>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}>
                                Ierland
                            </SocialLogo>
                            <WebsiteRights>Ierland © {new Date().getFullYear()} Alle rechten voorbehouden.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="https://www.instagram.com/awesomevietnamtravel/?hl=nl" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer
