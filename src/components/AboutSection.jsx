import home1 from '../assets/images/home1.png'


// Styled Component import

import styled from 'styled-components'

export const AboutSection = () => {

    return (
        <StyledAbout className='about-section'>
            <StyledDescription className="description">
                <div className="title">
                    <StyledHide className="hide">
                        <h2>I work hard to make</h2>
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
            <StyledImageContainer className="image">
                <img src={home1} alt="camera-man" />
            </StyledImageContainer>
        </StyledAbout>
    )

}


const StyledAbout = styled.section`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5rem 10rem;
color: white;
`

const StyledDescription = styled.div`

flex: 1;
padding-right: 1rem;
h2{
    font-weight: lighter;
}

`

const StyledImageContainer = styled.div`
flex: 1;
/* added for animation */
overflow: hidden;

img{
    width:100%;
    height: 80vh;
    object-fit: cover;
}
`

const StyledHide = styled.div`
    overflow: hidden;
`