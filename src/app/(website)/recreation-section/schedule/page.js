'use client';

import GoogleCalendar from "@/components/not-simple/googlecalendar";

export default function Page() {
      return (
         <div className="bg-white p-4 m-6 rounded-xl">
            <GoogleCalendar apiKey={process.env.apiCalendarKey} calendar=''/>
            <div>

            </div>
         </div>
     )
}