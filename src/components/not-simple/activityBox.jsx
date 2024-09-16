"use client";

import dayjs from "dayjs";
import InputTextBox from "../inputs/inputtextbox";
import { useEffect, useState ,useRef, use } from "react";
import Loader from "../common/Loader";
import api from "../Api/ApiActions";
import InputDateBox from "../inputs/inputdatebox";
import InputTextarea from "../inputs/inputtextarea";
import { useRouter } from "next/navigation";
import { Input } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { motion } from "framer-motion";
import { EffectCoverflow, Pagination, Navigation, Thumbs, FreeMode } from 'swiper/modules';
import './styles.css';
import { createPortal } from "react-dom";

const SwiperGalleryDiv = ({newImages, isGalleryFullscreen, setGalleryFullscreen, isModal, imageSize}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className={`mx-4 ${isModal ? "h-screen" : ""}`}>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={1}
                autoHeight={false}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation, FreeMode, Thumbs]}
                className={`mySwiper2 mb-4 h-[70%] ${ isModal ? "max-[350px]:h-[55%] max-[380px]:h-[68%]" : ""}`}
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                {newImages.map((image, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img
                                className={`object-contain mx-[4%] w-11/12 ${isModal ? "h-full" : "h-[500px]"} rounded-3xl bg-black`}
                                src={"/" + (image.isTmp ? "tmp" : "media") + "/" + image.filePath}
                                alt="new Image connected to activity"
                                height={imageSize.h}
                                width={imageSize.w}
                                onDoubleClick={() => {
                                    if (isGalleryFullscreen) return;
                                    setGalleryFullscreen(true);
                                }}
                            />
                        </SwiperSlide>
                    );
                })}
                <div className="slider-controler">
                    <div className={`swiper-button-prev slider-arrow ${isModal ? "ml-2" : "ml-12"}`}>
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className={`swiper-button-next slider-arrow ${isModal ? "mr-2" : "mr-12"}`}>
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination" style={{ marginBottom: "20px" }}></div>
                </div>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {newImages.map((image, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img
                                className="object-contain w-full h-24 rounded-lg bg-black"
                                src={"/" + (image.isTmp ? "tmp" : "media") + "/" + image.filePath}
                                alt="new Image connected to activity"
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

const ActivityBox = ({params: {action, id}, className: className}) => {
    const [apiData, setApiData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);
    const [namesArray, setNamesArray] = useState([]);
    const [countFormValid, setCountFormValid] = useState(0);
    const [newImages, setNewImages] = useState([]);
    const [imageInputValue, setImageInputValue] = useState([]);
    const timeoutUpdate = useRef(null);
    const currentTitleImage = useRef(null);
    const isReadOnly = action === "edit" || action === "new" ? false : true;
    const router = useRouter();
    const titleImageRef = useRef(null);
    const [isGalleryFullscreen, setGalleryFullscreen] = useState(false);

    const inputChangeHandler = async (event, name, callback) => {
        const value = event.target ? event.target.value : event.$d;
        setApiData( prevState => ({
            ...prevState,
            [name]: value
            })
        )
        if(action !== "edit") return;
        callback();
        var result = '';
        clearTimeout(timeoutUpdate.current);
        await new Promise((resolve, reject) => {
            timeoutUpdate.current = setTimeout(async () => {
                const res = await api.patchActivity(id, {[name]: value})
                if (res) {
                    result = 'success';
                }
                else {
                    result = 'error';
                }
                resolve();
            }, 500)
        })
        return result;

    }

    useEffect(() => {
        if (action === "new") {
            setApiData({
                title: "",
                text: "",
                titleImage: process.env.envImagesLocation+"historyCollage.png",
                date: "",
                image: []
            })
            setLoading(false)
            return
        }
        api.getActivity(id)
        .then((data) => {
            console.log(data);
            setApiData(data)
            setNewImages(data.image)
            setLoading(false)
        })
        .catch(error => console.log('error', error));
    }, [])

    const submitHandler = (event) => {
        setLoading(true);
        event.preventDefault();
        if(countFormValid < 2) return;
        api.postActivity(apiData)
        .then((data) => {
            router.push("/activities/show/"+data.id);
        })
        .catch(error => {
            setError(true); 
            setTimeout(() => {
                router.refresh();
            }, 2500);
        });
    }

    const toggleValidity = (name, hasError) => {
        console.log(name, hasError);
        let functionArray = namesArray;
        if(functionArray.includes(name) && hasError){
            functionArray.splice(functionArray.indexOf(name), 1)
            setNamesArray(functionArray);
            setCountFormValid( prevNumber => {return prevNumber - 1});
        }
        else if(!functionArray.includes(name) && !hasError){
            functionArray.push(name);
            setNamesArray(functionArray);
            setCountFormValid( prevNumber => {return prevNumber + 1});
        }
    }

    useEffect(() => {
        if(action !== "edit" || !apiData?.titleImage || titleImageRef?.current?.value === apiData?.titleImage) return;

        titleImageRef.current.value = apiData.titleImage;

        if(titleImageRef.current){
            const tracker = titleImageRef.current._valueTracker;

            if (tracker) tracker.setValue(Math.random());

            const event = new Event('change', { bubbles: true });
            titleImageRef.current.dispatchEvent(event);
        }
    }, [apiData?.titleImage])

    return (
        isLoading ? 
            <Loader />
        :
        (   
            isError ?
                <div className="text-3xl font-semibold text-slate-700 mb-12 flex justify-center">
                    Wystąpił błąd podczas dodawania Wydarzenia!
                </div>
            :
            <div className={`${className ? className : "basis-[73%] mx-4"} flex justify-center max-h-full max-w-full min-h-0 min-w-0`}>
                <form className="w-11/12 md:mx-6 bg-white md:w-full rounded-xl">
                    <div className="flex flex-col md:flex-row items-start md:items-center">
                        <div className="basis-2/5 p-4 text-2xl font-semibold">
                            {isReadOnly === false ? 
                            <InputTextBox
                                value={apiData.title}
                                className="text-base font-normal" 
                                name="title" 
                                label="Tytuł wydarzenia:" 
                                validateFunction={(value) => {return value !== '' && value?.trim().length >= 3}} 
                                formIsValid={toggleValidity} 
                                inputChange={inputChangeHandler}
                                errorText="Prosze podać poprawny tytuł wydarzenia!"
                            />
                            :
                            <h1>{apiData.title}</h1>
                            }
                            <div className="flex justify-center md:w-auto mb-1 bg-blue-500 rounded mr-4 xl:mr-3 mt-2">
                                {isReadOnly === false ? 
                                <InputDateBox
                                    value={apiData.date}
                                    className="text-base mb-2 text-black font-normal mx-3" 
                                    name="date"
                                    label="Data wydarzenia:"
                                    validateFunction={(value) => {return value}}
                                    formIsValid={toggleValidity} 
                                    inputChange={inputChangeHandler}
                                    errorText="Prosze podać poprawną date!"
                                    isDateTime={false}
                                />
                                :
                                <span className="text-lg font-medium text-white">
                                    {dayjs(apiData.date).format("YYYY-MM-DD")}
                                </span>
                                }
                            </div>
                        </div>
                        <div className="basis-3/5">
                            {isReadOnly === false ?
                            <>
                                <img 
                                    className={`object-cover h-full w-full brightness-75 p-4 rounded-3xl`} 
                                    src={ action === "new" ? apiData.titleImage.replace("media", "tmp") : apiData.titleImage }
                                    onLoad={(e) => {
                                        e.target.height = e.target.width+"px";
                                    }}
                                    alt={"title Image: " + apiData.title}
                                    height={1920}
                                    width={1080}
                                />
                                <InputTextBox
                                    value={apiData.titleImage}
                                    ref={titleImageRef}
                                    className="text-base md:mx-2 mx-4" 
                                    name="titleImage" 
                                    label="Link do zdjęcia:" 
                                    inputChange={inputChangeHandler}
                                />
                                <Input 
                                    type="file"
                                    inputProps={{ multiple: true }}
                                    accept="image/*"
                                    onChange={async (e) => {
                                        const response = await api.postMediaObject({
                                            ...(Array.from(e.target.files).reduce((acc, file, key) => {
                                                return {...acc, [`file[${key}]`]: file}
                                            }, {}))
                                        })
                                        .catch(error => console.log('error', error));
                                        const newImagesIris = response.map(image => image["@id"]);

                                        setApiData( prevState => {
                                            return {
                                                ...prevState,
                                                ["image"]: [
                                                    ...prevState.image, 
                                                    ...(action === "new" ? newImagesIris : response)
                                                ]
                                            }}
                                        )
                                        if(action === "edit"){
                                            await api.patchActivity(id, {
                                                image: [
                                                    ...newImagesIris, 
                                                    ...apiData.image.map(image => image["@id"])
                                                ]
                                            })
                                            .catch(error => console.log('error', error));
                                        }

                                        setNewImages(prevValues => [...prevValues, ...response]);
                                    }}
                                />
                            </> 
                            :
                            <img 
                                className={`object-cover w-full brightness-75 p-4 rounded-3xl`} 
                                src={apiData.titleImage} 
                                alt={"title Image: " + apiData.title}
                                height={1920}
                                width={1080}
                            />
                            }
                        </div>
                    </div>
                    <div className="my-3">
                        <InputTextarea
                            value={apiData.text}
                            className="p-4" 
                            name="text" 
                            label="Opis wydarzenia:" 
                            inputChange={inputChangeHandler}
                            readOnly={isReadOnly}
                        />
                        {
                            newImages.length > 0 && action !== "show" ? 
                            <div className="flex flex-wrap justify-center">
                                {newImages.map((image, index) => {
                                    return (
                                        <img 
                                            key={index} 
                                            className="object-cover md:w-1/2 h-1/2 p-4 rounded-3xl" 
                                            src={"/" + (action === "edit" ? "media" : (image.isTmp ? "tmp" : "media")) + "/" + image.filePath} 
                                            onClick={(e) => {
                                                if(currentTitleImage.current) currentTitleImage.current.style.border = "none";
                                                currentTitleImage.current = e.target;
                                                currentTitleImage.current.style.border = "2px solid #2563EB";
                                                setApiData( prevState => {
                                                    return {
                                                        ...prevState,
                                                        ["titleImage"]: "/media/" + image.filePath
                                                    }}
                                                )
                                            }}
                                            alt="new Image connected to activity"
                                            height={1920}
                                            width={1080}
                                        />
                                    )
                                })}
                            </div>
                            :
                            <SwiperGalleryDiv 
                                isModal={false}
                                newImages={newImages}
                                isGalleryFullscreen={isGalleryFullscreen}
                                setGalleryFullscreen={setGalleryFullscreen}
                                imageSize={{h:768, w:1024}}
                            />
                        }
                        {isGalleryFullscreen && 
                            createPortal(
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-95 z-99999"
                                >
                                    <div className="flex justify-end cursor-pointer" onClick={() => setGalleryFullscreen(false)}>
                                        <svg class="h-16 w-16 text-slate-200 m-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                                            <path stroke="none" d="M0 0h24v24H0z"/>  
                                            <line x1="18" y1="6" x2="6" y2="18" />  
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </div>
                                    <div className="px-6">
                                        <SwiperGalleryDiv
                                            isModal={true}
                                            newImages={newImages}
                                            isGalleryFullscreen={isGalleryFullscreen}
                                            setGalleryFullscreen={setGalleryFullscreen}
                                            imageSize={{h:1080, w:1920}}
                                        />
                                    </div>
                                </motion.div>
                                ,
                                document.body
                            ) 
                        }
                    </div>
                    {
                    action === "new" && 
                        <div className="flex justify-end">
                            {countFormValid < 2 ?
                            <span className="w-2/3 sm:w-2/5 bg-blue-500 text-white text-lg font-semibold p-2 rounded-xl m-4 opacity-40 cursor-not-allowed text-center">
                                Zapisz
                            </span>
                            :
                            <button onClick={submitHandler} className="w-2/3 sm:w-2/5 bg-blue-500 text-white text-lg font-semibold p-2 rounded-xl m-4">
                                Zapisz
                            </button>
                            }
                        </div>
                    }
                </form>
            </div>
        )
    )
}

export default ActivityBox;