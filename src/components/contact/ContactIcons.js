import React from 'react';
import { FaTwitter, FaLinkedinIn, FaGithub, FaMailBulk } from 'react-icons/fa';
import { contactImg } from '../../assets/index';

const ContactIcons = () => {
    return (
        <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'>
            <img
                className='w-full h-64 object-cover rounded-lg mb-2'
                src={contactImg}
                alt='contactImg'
            />
            <div className='flex flex-col gap-4'>
                <h3 className='text-3xl font-bold text-white'>kayalvizhi Suresh</h3>
                <p className='text-lg font-normal text-gray-400'>
                    Full Stack Web Developer
                </p>
                <p className='text-base text-gray-400 tracking-wide'>
                Worked a innovative projects , gained design thinking skill
                </p>
                <p className='text-base text-gray-400 flex items-center gap-2'>
                    Phone: <span className='text-lighText'>+91 9786673912</span>
                </p>
                <p className='text-base text-gray-400 flex items-center gap-2'>
                    Email:{' '}
                    <span className='text-lighText'>
                        kayalvizhisuresh502@gmail.com
                    </span>
                </p>
            </div>
            <div className='flex flex-col gap-4'>
                <h2 className='text-base uppercase font-titleFont mb-4'>
                    Find me in
                </h2>
                <div className='flex gap-4'>
                    <a
                        href='https://github.com/KayalvizhiS16'
                        target='_blank'
                        className='bannerIcon'
                        rel='noreferrer'
                    >
                        <FaGithub />
                    </a>

                    <a
                                className='bannerIcon'
                                href='https://www.linkedin.com/in/kayalvizhisuresh/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                 <FaLinkedinIn />
                            </a>
                    <span className='bannerIcon'>
                        <FaMailBulk />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ContactIcons;
