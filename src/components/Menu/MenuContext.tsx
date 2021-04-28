import { ReactNode, useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { bookContext } from "../BookList/bookcontext";

interface lista {

    id: string;
    CurrentShelf: string;
    NameBook: string;
    Thumbnail: string;
    Authors: Array<String>;
    Description: string;
  
  }

interface context {
    
    Currentlist: Array<lista>
    setCurrentList: Function
    header: string
    setheader: Function
    
}

interface MenuProviderProps {
    children: ReactNode
}

export const MenuContext = createContext({} as context)




export default function MenuProvider ({children} : MenuProviderProps) {

    const {acabado,lendoAtual,desejoLer} = useContext(bookContext)
    const [Currentlist, setCurrentList] = useState(lendoAtual)
    const [header, setheader] = useState('Lendo atualmente')


    useEffect(() => {
        setheader('Lendo atualmente')
        setCurrentList(lendoAtual)
    }, [lendoAtual])

    return (
        <MenuContext.Provider value={{
            Currentlist, setCurrentList, header, setheader
        }}>
            {children}
        </MenuContext.Provider>
    );
}