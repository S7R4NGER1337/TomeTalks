import { useState } from "react";

export default function usePersistedState(item, defaultValue){
    const [state, setState] = useState(() => {
        const isItemExisting = localStorage.getItem(item)
        if(isItemExisting){
            return JSON.parse(isItemExisting)
        }

        return defaultValue
    })

    
    const setPresistedState = (value) => {
        setState(value)

        let result;
        if(typeof value === 'function'){            
            result = JSON.stringify(value(state))
        } else {
            result = JSON.stringify(value)
        }

        localStorage.setItem(item, result)
    }

    return[
        state,
        setPresistedState
    ]
}