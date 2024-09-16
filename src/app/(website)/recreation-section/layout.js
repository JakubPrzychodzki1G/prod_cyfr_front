'use client';
import SideBar from "@/components/sidebar/sidebar";

export default function SportSectionLayout({ children }) {
    const isHfull = false
    
    return (
        <div className={`w-full lg:w-5/6 min-[1600px]:w-9/12 lg:bg-slate-100 ${isHfull ? "h-full" : ""}`}>
            <div className={`w-full flex ${isHfull ? "h-full" : ""} flex-col lg:flex-row`}>
                <div className={`w-full lg:w-1/4 ${isHfull ? "h-full" : ""}`}>
                    <SideBar ownId={2} href="/recreation-section" title="Sekcja Rekreacyjna"/>
                </div>
                <div className="w-full lg:!w-3/4 relative lg:mt-[6rem]">
                    {children}
                </div>
            </div>
        </div>
    )
}
