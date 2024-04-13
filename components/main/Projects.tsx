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
            <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
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
                    src="/insight.jpeg"
                    title="INSIGHT"
                    description="A collection of OSINT tools written in python that can be used through python-CLI for profiling and foot-printing, these tools can streamline process of information gathering."
                />
                <ProjectCard
                    src="/PixelMage.png"
                    title="PixelMage"
                    description="PixelMage is a Saas platform that offers a variety of Image Manipulation tools for the users to easily do complex edits on the images with the help of AI."
                />
                <ProjectCard
                    src="/flappyAI.jpg"
                    title="Flappy Bird AI"
                    description="An artificial intelligence agent that can learn to play the popular mobile game Flappy Bird using the NEAT algorithm, using neural networks that control the in-game character."
                />
            </div>
        </div>
    );
};

export default Projects;