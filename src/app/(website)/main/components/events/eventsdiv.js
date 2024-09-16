'use client';
import { useEffect, useState } from "react";
import EventContainer from "./event";

export default function EventsDiv(props){
    const [apiData, setApiData] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const comingEvents = [
        {
                creation_date: "2023-08-30T04:27:16+00:00",
                customHref: "/sport-section/records",
                date: "2023-08-30T04:27:16+00:00",
                is_deleted: false,
                text: "Zapisy do klubu Posejdon konin juz sa dostepne!",
                title: "Zapisy do sekcji sportowej",
                titleImage: "https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                id: 1
        },
        {
                creation_date: "2023-08-30T04:27:16+00:00",
                customHref: "/sport-section/records",
                date: "2023-08-30T04:27:16+00:00",
                is_deleted: false,
                text: "Zapisy do klubu Posejdon konin juz sa dostepne!",
                title: "Zapisy do sekcji sportowej",
                titleImage: "https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                id: 2
        },
        {
                creation_date: "2023-08-30T04:27:16+00:00",
                customHref: "/sport-section/records",
                date: "2023-08-30T04:27:16+00:00",
                is_deleted: false,
                text: "Zapisy do klubu Posejdon konin juz sa dostepne!",
                title: "Zapisy do sekcji sportowej",
                titleImage: "https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                id: 3
        },
        {
                creation_date: "2023-08-30T04:27:16+00:00",
                customHref: "/sport-section/records",
                date: "2023-08-30T04:27:16+00:00",
                is_deleted: false,
                text: "Zapisy do klubu Posejdon konin juz sa dostepne!",
                title: "Zapisy do sekcji sportowej",
                titleImage: "https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                id: 4
        },
        {
                creation_date: "2023-08-30T04:27:16+00:00",
                customHref: "/sport-section/records",
                date: "2023-08-30T04:27:16+00:00",
                is_deleted: false,
                text: "Zapisy do klubu Posejdon konin juz sa dostepne!",
                title: "Zapisy do sekcji sportowej",
                titleImage: "https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                id: 5
        }
    ]

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("accept", "application/ld+json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
        // mode: 'no-cors'
        };
        var searchOptions = "?page=1&is_deleted=false";
        props.exclude && (searchOptions += "&id=" + props.exclude);
        if(props.type == 'past'){
            fetch("/api/activities" + searchOptions, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                setApiData(data["hydra:member"].slice(1, 6))
                setLoading(false)
            })
            .catch(error => console.log('error', error));
        }
        else{
            setApiData(comingEvents);
            setLoading(false);
        }
        
    }, []);

    return (
        <div className={`flex flex-col w-full mt-4 text-slate-800 ${props.height ? props.height : 'h-full'} mb-5`}>
            <h1 className="text-3xl font-bold mb-2">
                {props.title}
            </h1>
            <hr className="bg-blue-500 h-[2px] mb-4" />
            <div className={`grid grid-rows-5 gap-4 ${props.height ? props.height : 'h-full'}`}>
            {
                !isLoading && apiData && apiData.map( x => {
                    return (
                        <EventContainer 
                            key={x.id}
                            height="h-36"
                            imgClass="rounded"
                            {...x}
                        />
                    )
                })
            }
            </div>
        </div>
    )
}