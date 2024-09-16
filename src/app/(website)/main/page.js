'use client';
import PastEvents from "./components/events/pastevents"
import HistoryDiv from "./components/historydiv"
import News from "./components/news"
import SponsorsDiv from "./components/sponsors/sponsorsdiv"
import SwiperDiv from "./components/swiperdiv"


export default function Main() {
    var count = 0;

    return (
      <>
        <div className='w-full md:w-5/6 min-[1600px]:w-9/12 md:bg-slate-100 flex'>
          <div className="mt-24 w-full flex justify-center bg-slate-100">
            <div className="w-5/6 md:w-full flex flex-col lg:grid lg:gap-6 lg:grid-rows-4 lg:grid-cols-4">
              <div className="relative order-1 mt-4 mb-5 lg:mt-0 lg:mb-0 w-full lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-4">
                <SwiperDiv />
              </div>
              <div className="order-3 lg:col-start-4 lg:row-span-full">
                <News />
              </div>
              <div className="order-2 lg:col-start-1 lg:col-end-4 lg:row-start-4">
                <PastEvents />
              </div>
            </div>
          </div>
        </div>
        {
          count > 6 && <SponsorsDiv />
        }
        <div className="w-full bg-blue-500 flex justify-center lg:justify-end">
          <HistoryDiv />
        </div>
        <SponsorsDiv />
      </>
    )
  }