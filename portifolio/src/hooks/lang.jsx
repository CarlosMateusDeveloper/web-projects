import { useState } from "react";

export default function useLang() {
    const [lang , setLang] = useState("pt-br");

    const toggleLang = ()=>{
        setLang("En - us")
    }
    return {lang, toggleLang};
}