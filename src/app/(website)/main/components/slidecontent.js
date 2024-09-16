'use client';
import React from 'react';
import { motion } from "framer-motion";
import { useSwiperSlide } from 'swiper/react';

export default function SlideContent(props){
    const swiperSlide = useSwiperSlide();
    return (
        <a 
            className="grid w-full items-center rounded-xl h-full" 
            href={props.customHref ? props.customHref : '/club/activity/' + props.id}
        >
            <div className='col-span-full row-span-full w-full h-48 lg:h-[688px]'>
                <motion.img
                    src={props.titleImage} 
                    className="object-cover brightness-50 rounded-xl w-full h-full"
                    whileHover={{
                        scale: 1.07
                    }}
                />
            </div>
            <div className="col-span-full row-span-full relative lg:ml-4 p-8 w-10/12 md:w-4/12 z-10">
                {
                <motion.div 
                    initial={{ 
                        opacity: 0, 
                        scale: 0.5 
                    }}
                    animate={{
                        opacity: swiperSlide.isVisible ? 1 : 0,
                        scale: swiperSlide.isVisible ? 1 : 0.5, 
                    }}
                    className='bg-[rgba(128,128,128,0.3)] p-2 backdrop-blur-3xl rounded text-sm text-white'
                >
                    <div className='flex justify-center bg-blue-500 rounded w-2/3 md:w-1/2 text-bl'>
                        <span className=''>02-02-2023</span>
                    </div>
                    <div className='mt-4'>
                        <a className="font-medium lg:text-2xl" href={props.customHref ? props.customHref : '/club/activity/' + props.id}>
                            {props.title}
                        </a>
                    </div>
                </motion.div>
                }
            </div>
        </a>
    )
}