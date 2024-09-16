import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"
import Validator from "../components/Auth/Validator"

export default function SettingsLayout({ children }) {    
    return (
        <Validator>
            <Breadcrumb pageName="Ustawienia Strony głównej" />
            <div className="flex flex-col gap-10">
                {children}
            </div>
        </ Validator>
    )
}
