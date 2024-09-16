'use client';
import BlogDiv from "@/components/not-simple/blogdiv";
import NoBorderButton from "@/components/simple/noborderbutton";

export default function Page() {
    const apiData = {
        adminStreet: 'ul. 11 listopada, 23/103',
        adminCity: 'Konin',
        adminCityCode: '62-510',
        adminPhone: '+48 695 657 252',
        adminEmail: 'klubposejdonkonin@gmail.com',
        nip: '6653060039',
        regon: '526224330',
        accountNumber: '73 1020 2746 0000 3002 0294 4684'
    }

    return (
        <BlogDiv image="https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1119&q=80" breadcrump="Kontakt">
            <div>
                <h1 className="text-blue-500 text-2xl">Adres do korespondencji i Administracja Klubu:</h1>
                <div className="text-gray-600 font-medium text-sm lg:text-md">
                    <h2 className="mt-4">{apiData.adminStreet}</h2>
                    <h2 className="mt-1">{apiData.adminCityCode+' '+apiData.adminCity}</h2>
                </div>
            </div>
            <div className="mt-12 w-full">
                <h1 className="text-blue-500 text-2xl">Kontakt:</h1>
                <div className="mt-4 grid grid-col-1 lg:grid-cols-6 w-1/2 text-gray-600 text-sm lg:text-md font-medium">
                    <div className="col-span-2">
                        <h2>Telefon:</h2>
                    </div>
                    <div className="col-span-2 md:col-start-3 md:col-end-7">
                        <h2>{apiData.adminPhone}</h2>
                    </div>
                    <div className="mt-1 col-span-2">
                        <h2>E-mail:</h2>
                    </div>
                    <div className="mt-1 col-span-2 md:col-start-3 md:col-end-7">
                        <h2>{apiData.adminEmail}</h2>
                    </div>
                </div>
            </div>
            <div className="mt-12 w-full">
                <h1 className="text-blue-500 text-2xl">Dane:</h1>
                <div className="mt-4 grid grid-cols-6 w-1/2 text-gray-600 font-medium">
                    <div className="col-span-1">
                        <h2>NIP:</h2>
                    </div>
                    <div className="col-start-2 col-end-7">
                        <h2>{apiData.nip}</h2>
                    </div>
                    <div className="mt-1 col-span-1">
                        <h2>Regon:</h2>
                    </div>
                    <div className="mt-1 col-start-2 col-end-7">
                        <h2>{apiData.regon}</h2>
                    </div>
                    <div className="mt-1 col-span-1">
                        <h2>Konto:</h2>
                    </div>
                    <div className="mt-1 col-start-2 col-end-7">
                        <h2>{apiData.accountNumber}</h2>
                    </div>
                </div>
            </div>
            <div className="mt-12 w-full">
                <h1 className="text-blue-500 text-2xl">Social media:</h1>
                <ul className="mt-4 w-full h-full">
                    <NoBorderButton href="https://facebook.com" className="text-3xl" textColor="#4b5563">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16"> 
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/> 
                        </svg>
                        <span className="tracking-tighter">
                            Facebook
                        </span>
                    </NoBorderButton>
                </ul>
            </div>
        </BlogDiv>
    )
}