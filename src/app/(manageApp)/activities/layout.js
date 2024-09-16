import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"
import Validator from "../components/Auth/Validator"

export default function ActivityLayout({ children }) {    
    return (
        <Validator>
            <Breadcrumb pageName="Wydarzenia w klubie" />
            <div className="flex flex-col gap-10">
                {children}
            </div>
        </ Validator>
    )
}
