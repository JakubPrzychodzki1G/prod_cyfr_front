'use client';

export default function HistoryDiv(){
    return (
        <div className="w-full md:px-5 lg:px-0 lg:w-11/12 min-[1600px]:w-[87.5%] flex flex-col lg:flex-row">
            <div className="w-5/6 lg:w-1/3 flex-cols self-center text-white mb-5 lg:mb-0">
                <h1 className="font-bold text-[46px] leading-none py-5 lg:p-5">Posejdon<br/>Konin</h1>
                <p className="lg:p-5 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut leo leo. Sed felis nunc, sollicitudin semper ultrices vitae, pellentesque non est. Suspendisse rhoncus pharetra semper. Aliquam interdum metus sit amet ipsum cursus ultrices.<br/>Sed suscipit iaculis augue, quis tempus libero tempor quis. Etiam lacinia, diam vitae commodo venenatis, arcu metus porttitor lorem, et pharetra felis ipsum et orci. Quisque aliquam urna dui. Sed facilisis sem in augue maximus, at interdum ipsum auctor. Quisque ac nibh eget odio finibus accumsan. Integer non nunc sit amet erat tincidunt imperdiet ac eu nunc. Nunc non lectus ac sem pellentesque luctus. Donec vitae luctus dolor.
                </p>
            </div>
            <div className="w-full lg:w-2/3">
                <img className="w-full object-cover lg:h-[750px]" src={process.env.envImagesLocation+"historyCollage.png"}/>
            </div>
        </div>
    )
}