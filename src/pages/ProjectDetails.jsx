import { useState, useEffect } from 'react'
import { projectService } from "../services/projectService.js";

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
        <section className="project-details">
            Project loaded
        </section>
    )
}