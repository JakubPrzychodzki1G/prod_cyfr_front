"use client"

import { useEffect, useState, useRef } from "react"
import { useContext } from "react"
import { UserState } from "@/components/simple/clientAuthProvider"
import Link from "next/link"
import ActivitiesFilter from "@/components/Filters/ActivitiesFilter"
import api from "@/components/Api/ApiActions";
import dayjs from "dayjs";
import { useRouter } from "next/navigation"
import { ItemValidator } from "@/app/(manageApp)/components/Auth/ItemValidator"
import { Pagination } from "@mui/material"
import AddButton from "../Forms/AddButton"

const ActivityTable = (props) => {
    const router = useRouter();
    const [page, setPage] = useState(1);
    const [activitiesData, setActivitiesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState(0);
    const [tableHeight, setTableHeight] = useState(0);
    const table = useRef();
    const user = useContext(UserState);

    const fetchActivities = async (options = '') => {
        const getOptions = {
            params: {
                page: page,
                isDeleted: false,
                ...options
            }
        };
        const res = await api.getActivities(getOptions)
        console.log(res);
        if(res) {
            setActivitiesData(res.data);
            setTotal(res.total);
            setLoading(false);
        }
    } 

    useEffect(() => {
        router.prefetch('/activities/edit/[id]');
        router.prefetch('/activities/show/[id]');
        fetchActivities();
    }, [])

    useEffect(() => {
        setTableHeight(table.current ? table.current.clientHeight : 100);
        setLoading(true);
        fetchActivities();
    }, [page])

    const isEditor = user.roles?.includes("ROLE_COACH") || user.roles?.includes("ROLE_ADMIN"); 
    
    const deleteActivity = async (e, activityId) => {
        e.preventDefault();

        const res = await api.deleteActivity(activityId)
        if(res.ok) {
        setActivitiesData(activitiesData.filter(activity => activity.id !== activityId));
        }
    }

    const filterActivitiesHandler = (options) => {
        fetchActivities(options);
    }

    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="flex justify-between">
                <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
                Zajęcia
                </h4>
                {props.isMainPage && 
                <div className="flex">
                    <ItemValidator permission="/activities/new">
                        <div className="mr-4">
                            <button onClick={() => {router.push("/activities/new")}} className="bg-blue-500 text-white font-bold p-4 rounded-xl"> Dodaj wydarzenie </button>
                        </div>
                    </ItemValidator>
                    <AddButton refresh={fetchActivities} component="generateActivity"/>
                </div>
                }
            </div>
            <div className="flex flex-col">
                <ActivitiesFilter filterHandler={filterActivitiesHandler}/>
                <div className={`grid grid-cols-2 rounded-sm bg-gray-2 dark:bg-meta-4 ${isEditor ? 'sm:grid-cols-4' : 'sm:grid-cols-2'}`}>
                    <div className="p-2.5 text-center xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Tytuł wydarzenia
                        </h5>
                    </div>
                    <div className="p-2.5 text-center xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Data
                        </h5>
                    </div>
                </div>

                {loading ? 
                    <div style={{height: tableHeight+"px"}} className={`flex justify-center items-center h-[${tableHeight}px] w-full`}>
                        <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
                    </div>
                :
                    <ul ref={table}>
                    {activitiesData && activitiesData.map((activity, key) => (
                    <Link href={`/activities/show/${activity.id}`}
                    // <div
                        className={`grid grid-cols-2 ${isEditor ? 'sm:grid-cols-4' : 'sm:grid-cols-2'} ${
                        key === activitiesData.length - 1
                            ? ""
                            : "border-b border-stroke dark:border-strokedark"
                        }`}
                        key={key}
                    >

                        <div className="flex items-center justify-center p-2.5 xl:p-5">
                            <p className="text-black dark:text-white">{activity.title}</p>
                        </div>

                        <div className="flex items-center justify-center p-2.5 xl:p-5">
                            <p className="text-black dark:text-white">{dayjs(activity.date).format('DD/MM/YYYY')}</p>
                        </div>

                        <ItemValidator permission="/activities/edit">
                            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                <button onClick={(e) => {e.stopPropagation(); e.preventDefault(); router.push(`activities/edit/${activity.id}`)}} className="px-2 py-1.5 text-sm font-medium text-white transition duration-200 ease-in-out bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                Edytuj
                                </button>
                            </div>
                        </ItemValidator>
                        <ItemValidator permission="deleteActivity">
                            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                <button onClick={(e) => {e.preventDefault()}} onDoubleClick={(e) => {deleteActivity(e, activity.id)}} className="px-2 py-1.5 text-sm font-medium text-white transition duration-200 ease-in-out bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                Usuń
                                </button>
                            </div>
                        </ItemValidator>
                    {/* </div> */}
                    </Link>
                    ))}
                    </ul>
                }
                <Pagination 
                    className="p-4 self-end" 
                    count={total} 
                    color="primary" 
                    page={page}
                    onChange={(e, page) => {
                        setPage(page); 
                    }} 
                />
            </div>
        </div>
    )
}

export default ActivityTable
