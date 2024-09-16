'use client';
import dayjs from "dayjs"
import { motion } from "framer-motion"
import Link from "next/link"
import React from "react"

export default function Event(props){
    const variants = {
        hover: { 
            scale: 1.07,
            borderColor: "rgb(137, 207, 240)"
        }
    }

    return (
        <motion.div
            className="relative grid items-center"
            whileHover="hover"
            variants={variants} 
        >
            <div className={`col-span-full ${props.height} row-span-full`}>
                <Link href={props.customHref ? props.customHref : '/club/activity/' + props._id}>
                    <img className={`object-cover ${props.height} w-full brightness-75 ${props.imgClass}`} src={props.titleImage}/>
                </Link>
            </div>
            <div className="col-span-full row-span-full z-10">
                <div className="flex flex-col items-end text-white font-semibold">
                    <div className="flex justify-center w-2/3 min-[500px]:w-2/5 md:w-1/3 mb-1 bg-blue-500 rounded mr-4 xl:mr-3">
                        <span className="text-xs font-medium">
                            {dayjs(props.date).format("YYYY-MM-DD")}
                        </span>
                    </div>
                    <div className="flex mr-4 xl:mr-3 ml-3">
                        <div className="h-min bg-[rgba(128,128,128,0.6)] p-2 rounded">
                            <Link href={props.customHref ? props.customHref : '/club/activity/' + props._id} className="">{props.title}</Link>
                        </div>
                    </div>
                </div>  
            </div>
        </motion.div>
    )
}