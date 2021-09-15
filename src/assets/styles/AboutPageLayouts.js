import styled from 'styled-components'

// Reusable Layouts in  about page

export const StyledSectionLayout = styled.section`
 min-height: 90vh;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 5rem 10rem;

`

export const StyledDescriptionLayout = styled.div`
  flex: 1;
  padding-right: 1rem;
`

export const StyledImageContainerLayout = styled.div`
   flex: 1;
/* added for animation */
    overflow: hidden;

img{
    width:100%;
    height: 80vh;
    object-fit: cover;
}
`