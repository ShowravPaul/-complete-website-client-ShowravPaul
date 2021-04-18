import React from 'react';
import ProjectDetails from '../ProjectDetails/ProjectDetailis'
import imgProject1 from '../../../images/project1.jpg'
import imgProject2 from '../../../images/project2.jpg'
import imgProject3 from '../../../images/project3.jpg'
import './Projects.css'

const projectData = [
    {
        projectName: 'Collecting rare plants',
        aboutProject: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In error ex explicabo tempora mollitia veritatis!',
        projectImage: imgProject1
    },
    {
        projectName: 'Celebrating tree plantation day',
        aboutProject: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In error ex explicabo tempora mollitia veritatis!',
        projectImage: imgProject2
    },
    {
        projectName: 'Project-GREEN-ROOF',
        aboutProject: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In error ex explicabo tempora mollitia veritatis!',
        projectImage: imgProject3
    }
]

const Projects = () => {
    return (
        <section className="projects-container p-3">
            <div className="text-center">
                <h3>
                    <i><span style={{ color: 'green' }}>"On the last day of the world,  <br /> I would want to plant a tree."</span></i>
                    -  W.S. Merwin
                </h3>
                <h2 className="mt-5">Our successful projects about tree plantation</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row pt-3">
                    {
                        projectData.map(project => <ProjectDetails project={project} key={project.projectName}></ProjectDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Projects;