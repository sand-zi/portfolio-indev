import styled from 'styled-components'
import { Link } from 'react-router-dom'
// Images
import athlete from '../assets/images/athlete-small.png'
import goodtimes from '../assets/images/goodtimes-small.png'
import theracer from '../assets/images/theracer-small.png'




export const ProjectsPage = () => {
    return (
        <StyledProjectPage className="projects-page">
            <StyledProjectPreview className='project-preview'>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to='/'>
                    <img src={athlete} alt="athlete" />
                </Link>

            </StyledProjectPreview>

            <StyledProjectPreview className='project-preview'>
                <h2>The Good Times</h2>
                <div className="line"></div>
                <Link to='/'>
                    <img src={goodtimes} alt="goodtimes" />
                </Link>

            </StyledProjectPreview>
            <StyledProjectPreview className='project-preview'>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to='/'>
                    <img src={theracer} alt="racer" />
                </Link>

            </StyledProjectPreview>



        </StyledProjectPage>
    )
}


const StyledProjectPage = styled.section`
min-height: 100vh;
overflow: hidden;
padding: 5rem 10rem;

h2{
    padding: 1rem 0rem;
}

`


const StyledProjectPreview = styled.div`
padding-bottom: 10rem;

.line{
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem ;
}

img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
}

`