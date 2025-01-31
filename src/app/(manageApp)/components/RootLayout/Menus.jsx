"use client"
import { useState, useEffect, useContext } from "react"
import Sidebar from "@/components/sidebarManage"
import Header from "@/components/Header"

const Menus = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    // const appState = useContext(AppState);
    const [loading, setLoading] = useState(true)

    return (
        <>
            <Sidebar
                className="col-start-1 xl:col-end-3 sm:col-end-6 md:col-end-4 col-end-8 w-3/4 sm:w-1/2 md:w-1/4 xl:w-1/6"
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />
            <Header
                className="col-span-12 col-start-1 row-span-1 row-start-1 bg-white dark:bg-boxdark dark:drop-shadow-none"
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />
        </>
    )
}

export default Menus