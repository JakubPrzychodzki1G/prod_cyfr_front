
import Validator from "@/app/(manageApp)/components/Auth/Validator";
import ActivityBox from "@/components/not-simple/activityBox";
import { redirect } from "next/navigation";

const Page = ({params: {action, id}}) => {
    !["edit", "show"].includes(action) && redirect("/");
    return (
        <Validator>
            <ActivityBox className="w-full sm:w-5/6 xl:w-8/12 min-h-screen" params={{"action": action, "id": id}} />
        </Validator>
    )
}

export default Page;