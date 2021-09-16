import { useState, useEffect } from 'react'
import { projectService } from "../services/projectService.js";

import styled from 'styled-components';

export const ProjectDetails = ({ match, history }) => {

    const [project, setProject] = useState(null)

    useEffect(() => {
        const loadProject = () => {
            const { id } = match.params
            const proj = projectService.getById(+id)
            setProject(proj)
        }

        loadProject()

    }, [match.params])



    if (!project) return <div>Loading</div>

    return (
        <StyledProjectDetails className="project-details">
            < StyledHeadline className="headline">
                <h2>{project.title}</h2>
                <img src={project.mainImg} alt={project.title} />
            </StyledHeadline>
            <StyledAwards className="awards-container">

                {project.awards.length && project.awards.map(award => {

                    return (<StyledAward key={award.id}>
                        {/* to redo with div container to straighten */}
                        <h3>{award.title}</h3>
                        <div className="line"></div>
                        <p>{award.description}</p>

                    </StyledAward>)

                })}

            </StyledAwards>

            <StyledImageContainer className="img-container">
                <img src={project.secondaryImg} alt={project.title} />
            </StyledImageContainer>


        </StyledProjectDetails>
    )
}


const StyledProjectDetails = styled.section`
`

const StyledHeadline = styled.div`

min-height: 90vh;
padding-top: 20vh;
position: relative;

h2{
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
}

img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
}

`

const StyledAwards = styled.div`
min-height: 80vh;
display: flex;
padding: 5rem 10rem;
align-items: center;
justify-content: space-around;

`


const StyledAward = styled.div`
display: flex;
flex-direction:column;
justify-content: space-between;
align-items: flex-start;
padding: 3rem;
min-height: 25rem;


h3{
    font-size: 2rem;
    flex-grow: 1;
}

.line{
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin:1rem 0rem;
}

`

const StyledImageContainer = styled.div`
padding: 5rem 10rem;
min-height: 50vh;
img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
}

`