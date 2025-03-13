'use client'

import {useState} from "react";

export const useToggleState = () => {
    const [isOpen,setIsOpen ] = useState<boolean>(true);
    const toggleIsOpen = ()=>{
        setIsOpen(!isOpen);
    }
    return {isOpen, toggleIsOpen}
}