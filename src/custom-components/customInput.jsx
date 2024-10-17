import { useEffect, useRef, forwardRef, useState } from 'react';
import '../styles/default-custom-components.css';

const CustomInput = forwardRef((props, ref) => {
    const inputRef = useRef();
    const [focused, setFocused] = useState(false);

    // Combine internal ref with external ref (if provided)
    const combinedRef = ref || inputRef;

    useEffect(() => {
        if (props.shouldFocus) {
            combinedRef.current.focus();
        }
    }, [props.value, props.shouldFocus, combinedRef]);

    return (
        <div className='customInput row center small-gap' onClick={() => {
            if (props.onClick) props.onClick();
            combinedRef.current.focus();
            setFocused(true);
        }} style={{ position: 'relative', outline: props?.error ? '1px solid red' : null }}>

            {props?.label &&
                <label
                    className={
                        (props.value || focused || props?.type === 'number' || props?.type === 'date' || props?.beforeInput)
                            ? 'customInput_label customInput_label_active row no-gap'
                            : 'customInput_label row'
                    }>{props?.label} <p style={{color: "red"}}>{props?.required ? "*" : null}</p></label>
            }
            {props?.error && <label 
            style={{color: "red", fontSize: "0.8rem", marginTop: "0.5rem", position: "absolute", bottom: "2px", left: "20px", pointerEvents: "none"}}
             className='error'>{props?.error}</label>}
            {props?.beforeInput && <div className='beforeInput'>{props?.beforeInput}</div>}
            {props?.prefix && <p className='prefix'>{props?.prefix}</p>}

            <input
                {...props}
                onFocus={(e) => {
                    if (props?.onFocus) props?.onFocus(e);
                    setFocused(true);
                }}
                ref={combinedRef}
                className={props.className}
                type={props?.type || "text"}
                onChange={props.onChange}
                
                placeholder={props?.label ? null : props?.placeholder}
                onClick={props?.onClick}
                onBlur={(e) => {
                    setFocused(false);
                    if (props.onBlur) props?.onBlur(e);
                }}
            />

            {props?.suffix && <p style={{ whiteSpace: "nowrap" }} className='suffix'>{props?.suffix}</p>}
        </div>
    );
});

export default CustomInput;


function formatString(stringUntempered, pattern) {
    if (!stringUntempered) return '';
    if (!pattern) return stringUntempered;
    if (pattern?.length === 0) return stringUntempered;
    // Define the pattern of spaces

    const stringMax = pattern.reduce((acc, curr) => acc + curr, 0);
    const stringTakenAwayExcess = stringUntempered.replace(/\s/g, '').substr(0, stringMax);
    const str = stringTakenAwayExcess;
    let formatted = '';
    let index = 0;

    for (let len of pattern) {
        // Slice the next part of the string and add a space
        formatted += str.substr(index, len) + ' ';
        index += len;
    }

    // Trim any excess space and return
    return formatted.trim();
}