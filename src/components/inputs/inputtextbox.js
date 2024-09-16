'use client';

import UseInput from "@/hooks/use-input";
import { forwardRef } from "react";

const InputTextBox = forwardRef((props, ref) => {
    if(props.readOnly){
        return (
            <div className={`${props.className} flex flex-col`}>
                <label className="" htmlFor={props.name}>{props.label}</label>
                <input 
                    type="text" 
                    name={props.name} 
                    id={props.name} 
                    className="h-14 border hover:border-gray-600 rounded px-4 w-full bg-gray-50" 
                    value={props.value}
                    ref={ref ?? null}
                    readOnly
                />
            </div>
        )
    }
    const {
        value: textValue,
        isValid: isValid,
        hasError: hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset: reset,
        isSaved: isSaved
    } = UseInput(props.validateFunction, props.inputChange, 'normal', props.name, props.formIsValid, props.value, props.onBlur);
    const initial = true;
    return (
    <div className={`${props.className} flex flex-col justify-start`}>
        <label className="" htmlFor={props.name}>{props.label}</label>
        <input 
            type={props.type ? props.type : "text"}
            name={props.name} 
            id={props.name} 
            className="h-14 border hover:border-gray-600 rounded px-4 w-full bg-gray-50" 
            value={textValue} 
            onChange={valueChangeHandler} 
            onBlur={(e) => {inputBlurHandler(e);}} 
            placeholder={props.placeholder}
            ref={ref}
        />
        {hasError &&
            <div className="mt-2 text-red-600">
                {props.errorText}
            </div>
        }
        {
            isSaved
            && 
            isSaved == 'success' 
            ? 
            (<div className="mt-2 text-green-600">Zapisano!</div>) 
            : 
                isSaved == 'error' 
                ? 
                (<div className="mt-2 text-red-600">Błąd zapisu!</div>) 
                : 
                    isSaved == 'saving' 
                    ? 
                    (<div className="mt-2 text-blue-600">Zapisywanie</div>)
                    : 
                    ''
        }
    </div>
    )
})

export default InputTextBox;