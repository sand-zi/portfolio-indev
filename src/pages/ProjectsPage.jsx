import { useState, useEffect } from 'react'
import { projectService } from "../services/projectService.js";

import { Link } from 'react-router-dom'

import styled from 'styled-components'


// Images
// import athlete from '../assets/images/athlete-small.png'
// import goodtimes from '../assets/images/goodtimes-small.png'
// import theracer from '../assets/images/theracer-small.png'




export const ProjectsPage = () => {
    const [projects, setProjects] = useState([])


    useEffect(() => {
        const loadProjects = () => {

            const projs = projectService.query()
            setProjects(projs)
        }

        loadProjects()

    }, [])

    if (!projects.length) return <div>Loading the projects</div>
    return (
        <StyledProjectPage className="projects-page">

            {projects.map(project => {
                return (
                    <StyledProjectPreview className='project-preview' key={project.id}>
                        <h2>{project.title}</h2>
                        <div className="line"></div>
                        <Link to={`/projects/${project.id}`}>
                            <img src={project.mainImg} alt={project.title} />
                        </Link>

                    </StyledProjectPreview>
                )
            })}

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