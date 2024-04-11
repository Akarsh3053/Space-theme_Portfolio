import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                    src="/IRIS.jpg"
                    title="Project IRIS"
                    description="It is a Computer Vision application that can be used to deploy Computer vision tools that can harness the power of existing camera systems by automating tracking and logging."
                />
                <ProjectCard
                    src="/AutoBot.png"
                    title="Autobot"
                    description="This interactive Web-based AutoML app can train machine learning models with minimum effort, allowing users to develop Machine Learning apps quickly."
                />
                <ProjectCard
                    src="/owldone.png"
                    title="Owldone"
                    description="OwlDone is a next and react-based web app that can be used as a collaborative SAAS platform for project management and task planning, increasing team's productivity."
                />
                <ProjectCard
                    src="/owldone.png"
                    title="Owldone"
                    description="OwlDone is a next and react-based web app that can be used as a collaborative SAAS platform for project management and task planning, increasing team's productivity."
                />
                <ProjectCard
                    src="/owldone.png"
                    title="Owldone"
                    description="OwlDone is a next and react-based web app that can be used as a collaborative SAAS platform for project management and task planning, increasing team's productivity."
                />
                <ProjectCard
                    src="/owldone.png"
                    title="Owldone"
                    description="OwlDone is a next and react-based web app that can be used as a collaborative SAAS platform for project management and task planning, increasing team's productivity."
                />
            </div>
        </div>
    );
};

export default Projects;