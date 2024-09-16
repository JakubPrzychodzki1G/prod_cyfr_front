'use client';

import { useEffect, useState } from "react";
import EventContainer from "./event";

export default function PastEvents(){
    const [apiData, setApiData] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("accept", "application/ld+json");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        // mode: 'no-cors'-
        };

        fetch("/api/new_activities?page=4&is_deleted=false", requestOptions)
        .then((res) => res.json())
        .then((data) => {
            setApiData(data["hydra:member"])
            setLoading(false)
        })
        .catch(error => console.log('error', error));
    }, [])

    return (
        <div className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-6 md:mx-5 lg:mr-0 mb-5">
        {
            !isLoading && apiData && apiData.map( x => {
                return (
                    <EventContainer 
                        key={x.id}
                        height="h-48"
                        imgClass="rounded-xl"
                        {...x}
                    />
                )
            })
        }
        </div>
    )
}