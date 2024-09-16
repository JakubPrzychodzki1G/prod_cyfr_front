'use client';
import dayjs from "dayjs"
import { motion } from "framer-motion"
import React from "react"

export default function EventContainer(props){
    const variants = {
        hover: { 
            scale: 1.07,
            borderColor: "rgb(137, 207, 240)"
        }
    }

    return (
        <motion.a 
            className="relative grid items-center"
            whileHover="hover"
            variants={variants}
            href={props.customHref ? props.customHref : '/club/activity/' + props._id}
        >
            <div className={`col-span-full ${props.height} row-span-full`}>
                <img className={`object-cover ${props.height} w-full brightness-75 ${props.imgClass}`} src={props.titleImage} />
            </div>
            <div className="col-span-full row-span-full z-10">
                <div className="flex flex-col items-end text-white font-semibold">
                    <div className="flex justify-center w-1/3 md:w-3/5 min-[900px]:w-2/5 lg:w-2/3 xl:w-2/5 mb-1 bg-blue-500 rounded mr-4 xl:mr-3">
                        <span className="text-xs font-medium">
                            {dayjs(props.date).format("YYYY-MM-DD")}
                        </span>
                    </div>
                    <div className="flex mr-4 xl:mr-3 ml-3">
                        <div className="h-min bg-[rgba(128,128,128,0.6)] p-2 rounded">
                            <span className="">{props.title.length > 73 ? props.title.slice(0, 73)+"..." : props.title}</span>
                        </div>
                    </div>
                </div>  
            </div>
        </motion.a>
    )
}