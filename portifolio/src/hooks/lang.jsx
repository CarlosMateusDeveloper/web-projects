import { useState } from "react";

export default function useLang() {
    const [lang , setLang] = useState("pt-br");

    const toggleLang = (ev)=>{ev === "pt-BR"
        setLang("En - us")
    }
    return {lang, toggleLang};
}