import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Experience = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className='py-12 font-titleFont flex w-full gap-20 justify-between'
        >
            <div>
                <div className='flex flex-col gap-4 '>
                    <p className='text-sm text-designColor tracking-[4px]'>
                        2022 - 2023
                    </p>
                    <h2 className='text-4xl font-bold'>Job Experience</h2>
                </div>
                <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                <ResumeCard
                        title='Second Sigmoid'
                        subTitle='backend developer'
                        result='Success'
                        des='Worked a innovative projects , gained design thinking skill'
                    />
                    <ResumeCard
                        title='Aroopa Technology'
                        subTitle='Fullstack developer Intern'
                        result='Success'
                        des='Worked a innovative projects , gained design thinking skill'
                    />
                    <ResumeCard
                        title='Exposys datalab'
                        subTitle='Data science'
                        result='Success'
                        des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!'
                    />
                </div>
            </div>
            <div>
                <div className='flex flex-col gap-4'>
                    <p className='text-sm text-designColor tracking-[4px]'>
                        2023 - 2024
                    </p>
                    <h2 className='text-4xl font-bold'>Trainer Experience</h2>
                </div>
                <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                    <ResumeCard
                        title='Gym Instructor'
                        subTitle='Rainbow Gym Center (2015 - 2020)'
                        result='DHAKA'
                        des='The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.'
                    />
                    <ResumeCard
                        title='Web Developer and Instructor'
                        subTitle='SuperKing College (2010 - 2014)'
                        result='CANADA'
                        des='Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education.'
                    />
                    <ResumeCard
                        title='School Teacher'
                        subTitle='Kingstar Secondary School (2001 - 2010)'
                        result='NEVADA'
                        des='Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale.'
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Experience;
