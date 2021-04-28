
import { ReactNode, useContext, useState } from "react";
import { createContext } from "react";
import { bookContext } from "../BookList/bookcontext";
import { MenuContext } from "../Menu/MenuContext";

interface BooklistProps {

    id: string;
    CurrentShelf: string;
    NameBook: string;
    Thumbnail: string;
    Authors: Array<String>;
    Description: string;
  
  }

interface context {

    SearchActive: boolean
    setSearchActive: Function
    SearchBooks: Array<BooklistProps>
    SetSearch: Function
    ChangeActive: () => void;

}

interface SearchProvider {
    children: ReactNode
}

export const SearchPageContext = createContext({} as context)


export default function SearchPageProvider({children}:SearchProvider) {
    
    const {lendoAtual} = useContext(bookContext)
    const {setCurrentList,setheader} = useContext(MenuContext)

    const [SearchBooks, SetSearch] = useState([{id: '',CurrentShelf:'', NameBook: '', Thumbnail: '', Authors: [], Description: ''}].splice(1,1))
    

    const [SearchActive, setSearchActive] = useState(false)

    

    const ChangeActive = () => {
        setSearchActive(!SearchActive)
        
    }

    return (
        <SearchPageContext.Provider value={{SearchActive, setSearchActive, ChangeActive, SearchBooks, SetSearch}}>
            {children}
        </SearchPageContext.Provider>
    );
    
}