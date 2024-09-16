import EventsDiv from "@/app/(website)/main/components/events/eventsdiv";
import ActivityBox from "@/components/not-simple/activityBox";

export default function Page({params: {id}}) {

    return (
        <div className="flex flex-col md:flex-row items-center md:items-stretch mt-6 lg:mt-0 mb-36 md:mr-4">
            <ActivityBox params={{"id": id, "action": "show"}} />
            <div className="w-11/12 md:w-auto mt-4 md:mt-0 basis-[27%] h-full bg-white p-4 rounded-xl">
                <EventsDiv  height="custom-height" title="Zobacz także:" type="past" exclude={id}/>
            </div>
        </div>
    )
}