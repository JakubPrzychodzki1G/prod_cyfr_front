'use client';
import SideBar from "@/components/sidebar/sidebar";

export default function ClubLayout({ children }) {
    const isHfull = false
    
    return (
        <div className={`w-full lg:w-5/6 min-[1600px]:w-9/12 lg:bg-slate-100 ${isHfull ? "h-full" : ""}`}>
            <div className={`w-full flex flex-col lg:flex-row ${isHfull ? "h-full" : ""}`}>
                <div className={`w-full lg:w-1/4 ${isHfull ? "h-full" : ""}`}>
                    <SideBar ownId={3} href="/club" title="Klub"/>
                </div>
                <div className="w-full lg:!w-3/4 relative lg:mt-[6rem]">
                    {children}
                </div>
            </div>
        </div>
    )
}
