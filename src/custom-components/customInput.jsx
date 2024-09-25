import React, { useEffect, useRef, forwardRef, useState } from 'react';
//import { ReactComponent as EditIcon } from '../../assets/icons/material-symbols_edit.svg';

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
                value={formatString(props?.value, props?.inputPattern)}
                placeholder={props?.label ? null : props?.placeholder}
                onClick={props?.onClick}
                onBlur={(e) => {
                    setFocused(false);
                    if (props.onBlur) props?.onBlur(e);
                }}
            // To avoid duplicate props and issues with forwarding unknown props to the input, 
            // we destructure the ones we're using and pass the rest.

            />

            {props?.suffix && <p style={{ whiteSpace: "nowrap" }} className='suffix'>{props?.suffix}</p>}

            {props?.suggestions &&
                <div className="suggestions" style={{ position: 'absolute', width: '100%', top: '100%', left: 0, zIndex: 100, backgroundColor: 'white', boxShadow: '0px 0px 10px 0px #00000020' }}>
                    {props?.suggestions.map((suggestion, index) => {
                        return <button className='row suggestion' style={{ padding: '1rem', borderBottom: '1px solid #00000020', width: '100%', justifyContent: 'flex-start', display: 'flex', background: 'transparent', color: 'black', borderRadius: 0 }}
                            key={index} onClick={() => {
                                props?.onSuggestion(suggestion);
                            }}>
                            <h3>{suggestion?.navn || suggestion?.name}</h3>
                            <h3>{suggestion?.organisasjonsnummer || suggestion?.orgNumber} </h3>
                            <h3>{suggestion?.forretningsadresse?.adresse[0] || suggestion?.businessAddress} </h3>
                        </button>
                    })}
                </div>
            }
        </div>
    );
});

export default CustomInput;


function formatString(stringUntempered, pattern) {
    console.log(pattern)
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