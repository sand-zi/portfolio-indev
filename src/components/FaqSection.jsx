// Styled Component import

import styled from 'styled-components'

import { StyledSectionLayout } from '../assets/styles/AboutPageLayouts.js'


export const FaqSection = () => {

    return (
        <StyledFAQ className="faq-section" >
            <h2>Any Questions <span>FAQ</span></h2>

            <div className="question">
                <h4> How Do I Start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, vitae.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4> Daily Shcedule?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, vitae.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4> What products do you offer?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, vitae.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4> Payment methods?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, vitae.</p>
                </div>
                <div className="faq-line"></div>
            </div>
        </StyledFAQ >
    )

}


const StyledFAQ = styled(StyledSectionLayout)`
display: block;
h2{
    
    padding-bottom: 2rem;
    span{
        display: block;
    }
}

.faq-line{
    background: #ccc;
    height: 0.2rem;
    margin:2rem 0rem;
    width:100%;
}

.question{
    padding:3rem 0rem;
    cursor: pointer;
}

.answer{
    padding:2rem 0rem;

   h4{
       
    color: white;
   }
    p{
        padding:1rem 0rem;
    }
}

`