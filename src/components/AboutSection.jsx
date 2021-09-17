import home1 from '../assets/images/home1.png'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { StyledSectionLayout, StyledDescriptionLayout, StyledImageContainerLayout } from '../assets/styles/AboutPageLayouts.js'

export const AboutSection = () => {

    const titleAnim = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 2 } }
    }

    return (
        <StyledAbout className='about-section'>
            <StyledDescription className="description">
                <div className="title">
                    <StyledHide className="hide">
                        <motion.h2 variants={titleAnim} initial="hidden" animate="show">
                            I work hard to make</motion.h2>
                    </StyledHide>
                    <StyledHide className="hide">
                        <h2>my <span>dreams</span> come</h2>
                    </StyledHide>
                    <StyledHide className="hide">
                        <h2>true.</h2>
                    </StyledHide>
                    <p>Contact me for any website ideas that you have. </p>
                    <button> Contact me</button>
                </div>

            </StyledDescription>
            <StyledImageContainer className="image-container">
                <img src={home1} alt="camera-man" />
            </StyledImageContainer>
        </StyledAbout>
    )

}


const StyledAbout = styled(StyledSectionLayout)`
color: white;
`

const StyledDescription = styled(StyledDescriptionLayout)`
/* h2{
    font-weight: lighter;
} */

`

const StyledImageContainer = styled(StyledImageContainerLayout)``


const StyledHide = styled.div`
    overflow: hidden;
`