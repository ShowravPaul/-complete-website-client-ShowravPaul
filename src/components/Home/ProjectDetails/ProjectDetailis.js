import React from 'react';
import './ProjectDetails.css'

const ProjectDetails = ({ project }) => {
    const { projectName, aboutProject, projectImage } = project;
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 text-center">
            <div className="card" style={{backgroundColor: "lightGreen"}}>
                <img src={projectImage} alt="" />
                <div class="card-body">
                    <h5 class="card-title">{projectName}</h5>
                    <p class="card-text">{aboutProject}</p>
                    <button class="btn btn-primary">Read details...</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
