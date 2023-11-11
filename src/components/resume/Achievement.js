import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Achievement = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className='py-12 font-titleFont flex gap-20'
        >
            <div>
                <div className='py-12 font-titleFont flex flex-col gap-4'>
                    <p className='text-sm text-designColor tracking-[4px]'>
                        2022-2023
                    </p>
                    <h2 className='text-4xl font-bold'>Company Experience</h2>
                </div>
                <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                    <ResumeCard
                        title='Second Sigmoid'
                        subTitle='backend developer'
                        result='Success'
                        des='Worked a innovative projects , gained design thinking skill'
                    />
                     <ResumeCard
                        title='Second Sigmoid'
                        subTitle='backend developer'
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
                <div className='py-12 font-titleFont flex flex-col gap-4'>
                    <p className='text-sm text-designColor tracking-[4px]'>
                        2023 - 2024
                    </p>
                    <h2 className='text-4xl font-bold'>Job Experience</h2>
                </div>
                <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                    <ResumeCard
                        title='Aroopa Technology'
                        subTitle='fullstack developer Intern'
                        result='Success'
                        des='web development and data science skills can make you stand out to potential employers or clients'
                    />
                     <ResumeCard
                        title='Aroopa Technology'
                        subTitle='fullstack developer Intern'
                        result='Success'
                        des='web development and data science skills can make you stand out to potential employers or clients'
                    />
                    
                    <ResumeCard
                        title='Aroopa Technology'
                        subTitle='fullstack developer Intern'
                        result='Success'
                        des='web development and data science skills can make you stand out to potential employers or clients'
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Achievement;
