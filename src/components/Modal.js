import React from 'react'
import styled from 'styled-components'
import {MdClose} from 'react-icons/md'

const Background =styled.div `
    width: 100%;
    height: 860px;
    /*background: rgba(0,0,0,0.8);*/
    position: absolute;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalWrapper =styled.div `
    max-width: 1000px;
    height: 700px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const ModalImg =styled.img `
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    background: #000;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

const ModalContent =styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    /*align-items: center;*/
    padding: 1rem;
    line-height: 1.8;
    color: #141414;

    p {
        margin-bottom: 1rem;
    }

    button {
        padding: 10px 24px;
        background: #141414;
        color: #fff;
        border: none;
    }
`

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`

export const Modal = ({ showModal, setShowModal }) => {
    return (
        <>
            {showModal ? (
                <Background>
                    <ModalWrapper showModal={showModal}>
                        <ModalImg src={require('../images/routekaart.jpg').default} alt='kabouter' />
                        <ModalContent>
                            <h1>Bestemmingen</h1>
                            <h3>Dublin</h3>
                            <p>Bezienswaardigheden: Musea, kathedralen, pubs</p>
                            <h3>Graafschap Galway</h3>
                            <p>Bezienswaardigheden: Achill Island, Atlantic Coast Drive, Cathedral Rocks, Minaun Cliffs, Connemara, Kylemore Abbey</p>
                            <h3>Graafschap Clare</h3>
                            <p>Bezienswaardigheden: Natuurgebied van The Burren, Cliffs of Moher, Papegaaiduikers spotten</p>
                            <h3>Graafschap Kerry</h3>
                            <p>Bezienswaardigheden: Ring of Kerry, Ring of Skellig, Killarney National Park, Torc waterval</p>
                            <button onClick={() => setShowModal(prev => !prev)}>Sluiten</button>
                        </ModalContent>
                        <CloseModalButton aria-label='close modal' onClick={() => setShowModal(prev => !prev)} />
                    </ModalWrapper>
                </Background>
            ) : null}
        </>
    )
}