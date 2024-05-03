import { useState } from "react";


export const UseForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);

    const OnInputchange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }
    const reset = () => {
        setFormState(initialForm);
    }
    return {

        ...formState,

        formState,

        OnInputchange,

        reset,

    }
}
