'use client';
import SideBar from "@/components/sidebar/sidebar";

export default function SportSectionLayout({ children }) {    
    return (
        <div className={`w-full lg:w-5/6 min-[1640px]:w-9/12 lg:bg-slate-100`}>
            <div className={`w-full flex flex-col lg:flex-row`}>
                <div className={`w-full lg:w-1/4`}>
                    <SideBar ownId={1} href="/sport-section" title="Sekcja Sportowa"/>
                </div>
                <div className="w-full lg:!w-3/4 relative lg:mt-[6rem]">
                    {children}
                </div>
            </div>
        </div>
    )
}
