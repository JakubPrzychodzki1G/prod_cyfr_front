import Validator from "@/app/(manageApp)/components/Auth/Validator";
import ActivityBox from "@/components/not-simple/activityBox";
import { redirect } from "next/navigation";

const Page = ({params: {action}}) => {
    !["new"].includes(action) && redirect("/");
    return (
        <Validator>
            <ActivityBox className="w-8/12" params={{"action": action}} />
        </Validator>
    )
}

export default Page;