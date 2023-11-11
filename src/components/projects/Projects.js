import React from 'react';
import Title from './../shared/Title';
import ProjectCard from './ProjectCard';
import { projectOne, projectTwo, projectThree, projectFour } from '../../assets';

const Projects = () => {
    return (
        <div
            id='projects'
            className='w-full py-20 border-b-[1px] border-b-black'
        >
            <div className='flex justify-center items-center text-center mb-36'>
                <Title
                    title='VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK'
                    description='My Projects'
                />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
                <ProjectCard
                    title='Credit Card Fraud Detection'
                    description='I made a project using machine learning for accuracy of fradulation and also I used it to develop the following features, python libraries'
                    src={projectOne}
                />
                <ProjectCard
                    title='Intelligence Trffic Light Control System'
                    description=' Using OpenCv and image processing to improve the performance of the detection'
                    src={projectTwo}
                />
                <ProjectCard
                    title='Chatting App'
                    description=' Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!'
                    src={projectFour}
                />
                <ProjectCard
                    title='SOCIAL MEDIA CLONE'
                    description=' Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!'
                    src={projectThree}
                />
                <ProjectCard
                    title='E-commerce Website'
                    description=' Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!'
                    src={projectOne}
                />
                <ProjectCard
                    title='Chatting App'
                    description=' Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!'
                    src={projectTwo}
                />
            </div>
        </div>
    );
};

export default Projects;
