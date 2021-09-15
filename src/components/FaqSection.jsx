// Styled Component import

import styled from 'styled-components'

import { StyledSectionLayout } from '../assets/styles/AboutPageLayouts.js'


export const FaqSection = () => {

    return (
        <StyledSectionLayout className="faq-section" >
            <h2>Any Questions <span>FAQ</span></h2>

            <div className="question">
                <h4> How Do I Start</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, vitae.</p>
                </div>
            </div>
            <div className="question">
                <h4> Daily Shcedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, vitae.</p>
                </div>
            </div>
            <div className="question">
                <h4> What products do you offer</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, vitae.</p>
                </div>
            </div>
            <div className="question">
                <h4> Payment methods</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, vitae.</p>
                </div>
            </div>
        </StyledSectionLayout>
    )

}