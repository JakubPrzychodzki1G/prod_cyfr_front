import InputTextBox from "../inputs/inputtextbox"
import { useState } from "react";
import InputDateBox from "../inputs/inputdatebox";

const ActivitiesFilter = (props) => {
    const [options, setOptions] = useState("");

    const inputChangeOrBlurHandler = (event, name, callback) => {
        setOptions((prevState) => {
            const newOptions = event.target ? { ...prevState, [name]: event.target.value.trim() } : event && !event.target ? { ...prevState, [name]: event.format('YYYY-MM-DDTHH:mm:ssZ[Z]') } : prevState;
            event.target?.value === '' && delete newOptions[name];
            props.filterHandler(newOptions);
            return newOptions;
        })
    }

    return (
        <div className="flex flex-col justify-end mb-4">
            <h2 className="mb-2 text-xl font-semibold">Filtry</h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <InputTextBox 
                    className="" 
                    name="title" 
                    label="Nazwa grupy" 
                    onBlur={inputChangeOrBlurHandler}
                />
                <InputDateBox 
                    className="" 
                    name="date[after]" 
                    label="Data wydarzenia(po)" 
                    onBlur={inputChangeOrBlurHandler}
                />
                <InputDateBox 
                    className="" 
                    name="date[before]" 
                    label="Data wydarzenia(przed)" 
                    onBlur={inputChangeOrBlurHandler}
                />
            </div>
        </div>
    )
}

export default ActivitiesFilter