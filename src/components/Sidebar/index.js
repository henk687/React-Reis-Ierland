import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='bestemming' onClick={toggle}>Bestemming</SidebarLink>
                    <SidebarLink to="route" onClick={toggle}>Route</SidebarLink>
                    <SidebarLink to='geluk' onClick={toggle}>Geluk</SidebarLink>
                    <SidebarLink to="statistieken" onClick={toggle}>Statistieken</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="afbeeldingen" onClick={toggle}>Afbeeldingen</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
