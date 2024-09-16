'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Pagination, Navigation } from 'swiper/modules';
import React, { useRef, useState, useEffect } from 'react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/virtual';
import EventsContainer from './events-container';

export default function ActivitySwiper(){
    const [apiData, setApiData] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("accept", "application/ld+json");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        // mode: 'no-cors'
        };

        fetch("/api/activities", requestOptions)
        .then((res) => res.json())
        .then((data) => {
            setApiData(data["hydra:totalItems"])
            setLoading(false)
        })
        .catch(error => console.log('error', error));
    }, [])
    const pagination = {
        clickable: true,
        dynamicBullets: true,
        // renderBullet: function (index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + '</span>';
        // }
    };
    return(
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                shouldSwiperUpdate
                speed={1400}
                pagination={pagination}
                navigation={true}
                modules={[Virtual, Pagination, Navigation]}
                className='h-full !ml-[0.6rem] !mr-[0.6rem] md:!ml-[1.25rem] md:!mr-[1.25rem]'
                virtual
            >
                {!isLoading && [...Array(apiData/9 > 1 ? Math.floor(apiData/9) : Math.ceil(apiData/9))].map( (x, i) => {
                    return (
                        <SwiperSlide key={i} virtualIndex={i}>
                            <EventsContainer page={i+1}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}