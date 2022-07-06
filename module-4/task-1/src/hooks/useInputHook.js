import {useState} from "react";

function useInputHook(initialValue = '') {
    const [value, setValue] = useState(initialValue);
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const clearInput = () =>{
        setValue('');
    }

    return [value, handleChange, clearInput];
}

export default useInputHook;