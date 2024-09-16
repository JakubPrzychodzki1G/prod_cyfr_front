'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Autoplay, Pagination, Navigation } from 'swiper/modules';
import React, { useRef, useState, useEffect } from 'react';
import SlideContent from './slidecontent';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/virtual';

export default function SwiperDiv(){
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

        fetch("/api/activities?page=1&is_deleted=false", requestOptions)
        .then((res) => res.json())
        .then((data) => {
            setApiData(data["hydra:member"])
            setLoading(false)
        })
        .catch(error => console.log('error', error));
    }, [])

    return(
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                speed={1400}
                autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Virtual, Autoplay, Pagination, Navigation]}
                className='rounded-xl h-full md:!mx-[1.25rem] lg:!mr-0'
                virtual
            >
                {!isLoading ? apiData && apiData.map( x => {
                    return (
                        <SwiperSlide key={x.id} virtualIndex={x.id}>
                            <SlideContent {...x}/>
                        </SwiperSlide>
                    )
                }): null}
            </Swiper>
        </>
    )
}