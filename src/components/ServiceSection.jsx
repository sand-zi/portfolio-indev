// Import Icons

import clock from '../assets/images/clock.svg'
import diaphragm from '../assets/images/diaphragm.svg'
import money from '../assets/images/money.svg'
import teamwork from '../assets/images/teamwork.svg'
import styled from 'styled-components'

import { StyledSectionLayout, StyledDescriptionLayout, StyledImageContainerLayout } from '../assets/styles/AboutPageLayouts.js'
// Import Image
import home2 from '../assets/images/home2.png'
export const ServiceSection = () => {


    return (
        < StyledService className="service-section">
            <StyledDescription className="descriprion">
                <h2> High <span>quality </span> services</h2>

                <StyledCardsContainer className="cards-container">

                    <StyledCard className="card">
                        <div className="icon">
                            <img src={clock} alt="clock" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard className="card">
                        <div className="icon">
                            <img src={money} alt="money" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard className="card">
                        <div className="icon">
                            <img src={teamwork} alt="teamwork" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                </StyledCardsContainer>

            </StyledDescription>
            <StyledImageContainerLayout className="image-container">
                <img src={home2} alt="canon-camera" />
            </StyledImageContainerLayout>
        </StyledService>
    )
}



const StyledService = styled(StyledSectionLayout)`

`
const StyledDescription = styled(StyledDescriptionLayout)`
h2{
    padding-bottom: 5rem;
}

`


const StyledCardsContainer = styled.div`

    display: flex;
   flex-wrap: wrap;
`

const StyledCard = styled.div`

flex-basis: 20rem;

.icon{
    display: flex;
    align-items: center;

    h3{
        margin-left: 1rem;
        background: white;
        color: black;
        padding:1rem;
    }
}

p{
    width:70%;
    padding:2rem 0rem 4rem 0rem;
}


`