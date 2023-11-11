import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className='w-full flex  lgl:flex-row gap-10 lgl:gap-20'
        >
            {/* part one */}
            <div>
                <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
                    <p className='text-sm text-designColor tracking-[4px]'>
                        2017 - 2024
                    </p>
                    <h2 className='text-3xl md:text-4xl font-bold mb-10'>
                        Education Quality
                    </h2>
                </div>
                <div className='mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-14'>
                    <ResumeCard
                        title='B.TeCH in Artificial Intelligence AND Datascience'
                        subTitle='Sri Shanmugha  College of Engineering and technology'
                        percentage='8.5 CGPA'
                        description='The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.'
                    />
                    <ResumeCard
                        title='Higher Secondary Certificate'
                        subTitle='Governtment School(2019-2020)'
                        percentage='84%'
                        ddescription='Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education.'
                    />
                    <ResumeCard
                        title='Secondary School Education'
                        subTitle='Goverment School (2017- 2018)'
                        percentage='94%'
                        description='Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale.'
                    />
                </div>
            </div>

            {/*  Job Experience */}

            <div>
                <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-5'>
                    <p className='text-sm text-designColor tracking-[4px]'>
                        2023 - 2024
                    </p>
                    <h2 className='text-3xl md:text-4xl font-bold mb-10'>
                        Job Experience
                    </h2>
                </div>
                <div className='mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                <ResumeCard
                        title='Second Sigmoid'
                        subTitle='backend developer'
                        result='Success'
                        des='Worked a innovative projects , gained design thinking skill'
                    />
                    <ResumeCard
                        title='Aroopa Technology'
                        subTitle='fullstack developer Intern'
                        result='Success'
                        des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!'
                    />
                   
                   <ResumeCard
                        title='Exposys datalab'
                        subTitle='Data science'
                        result='Success'
                        des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!'
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Education;
