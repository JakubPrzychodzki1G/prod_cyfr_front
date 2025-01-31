
import UseInput from "@/hooks/use-input";
import { useEffect, useState } from "react";

export default function InputCheckbox(props){
    if(props.readOnly) return (
            <div className={`${props.className} flex justify-start items-center`}>
                <input
                    className="mr-2 w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    type="checkbox"
                    name={props.name}
                    id={props.name}
                    checked={props.checked}
                    readOnly={true}
                />
                <label htmlFor={props.name}>{props.label}</label>
            </div>
        )
    
    const {
        value: checkboxValue,
        isValid: isValid,
        hasError: hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset: reset,
        isSaved: isSaved
    } = UseInput(props.validateFunction, props.inputChange, 'checkbox', props.name, props.formIsValid, props.checked, props.onBlur, props.specialFunc);
    // if(props.name != 'isInvidual'){
    //     console.log('initial '+props.name, props.checked);
    // }
    return(
        <>
            <div className={`${props.className} flex justify-start items-center`} onClick={props.onClick ? props.onClick : () => void 0 }>
                <input
                    className='h-8 w-8 border hover:border-gray-600 rounded px-4 bg-gray-50 mr-2'
                    type="checkbox"
                    name={props.name}
                    id={props.name}
                    onChange={valueChangeHandler}
                    onBlur={inputBlurHandler}
                    checked={checkboxValue}
                />
                <label htmlFor={props.name}>{props.label}</label>
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
            {hasError && 
                <div className=" text-red-600">
                    {props.errorText}
                </div>
            }
        </>
        
    )
}