import { ReactNode, useContext, useEffect, useState } from "react";
import { createContext } from "react";

interface BooklistProps {

    id: string;
    CurrentShelf: string;
    NameBook: string;
    Thumbnail: string;
    Authors: Array<String>;
    Description: string;

}

interface context {


    lendoAtual: Array<BooklistProps>
    setLendoAtual: Function
    desejoLer: Array<BooklistProps>
    setDesejoLer: Function
    acabado: Array<BooklistProps>
    setAcabado: Function


}

interface BookproviderProps {
    children: ReactNode
}


export const bookContext = createContext({} as context);


export default function BookProvider({ children }: BookproviderProps) {

    

    const lendoAtualLocal = JSON.parse(localStorage.getItem('lendoAtual') || '{}');
    const desejoLerLocal = JSON.parse(localStorage.getItem('desejoLer') || '{}');
    const acabadoLocal = JSON.parse(localStorage.getItem('acabado') || '{}');



    const [lendoAtual, setLendoAtual] = useState([{ id: '', CurrentShelf: '', NameBook: '', Thumbnail: '', Authors: [], Description: '' }].splice(1, 1))
    const [desejoLer, setDesejoLer] = useState([{ id: '', CurrentShelf: '', NameBook: '', Thumbnail: '', Authors: [], Description: '' }].splice(1, 1))
    const [acabado, setAcabado] = useState([{ id: '', CurrentShelf: '', NameBook: '', Thumbnail: '', Authors: [], Description: '' }].splice(1, 1))

    

    useEffect(() => {
        for (let i in lendoAtualLocal) {
            
            let id = lendoAtualLocal[i]['id']

            let name = lendoAtualLocal[i]['NameBook'] ? lendoAtualLocal[i]['NameBook'] : 'Conteúdo inexistente.'
            let thumb = lendoAtualLocal[i]['Thumbnail'] ? lendoAtualLocal[i]['Thumbnail'] : 'https://i.ibb.co/NCh2r8g/404-error-1.png'
            let author = lendoAtualLocal[i]['Authors'] ? lendoAtualLocal[i]['Authors'] : ['Desconhecido']
            let desc = lendoAtualLocal[i]['Description'] ? lendoAtualLocal[i]['Description'] : 'Descrição indisponivel'

            setLendoAtual((lendoAtual: Array<BooklistProps>) => [...lendoAtual, { id: id ,CurrentShelf:'lendoAtual', NameBook: name, Thumbnail: thumb, Authors: author, Description: desc }])
            
        }

        for (let i in desejoLerLocal) {
            
            let id = desejoLerLocal[i]['id']

            let name = desejoLerLocal[i]['NameBook'] ? desejoLerLocal[i]['NameBook'] : 'Conteúdo inexistente.'
            let thumb = desejoLerLocal[i]['Thumbnail'] ? desejoLerLocal[i]['Thumbnail'] : 'https://i.ibb.co/NCh2r8g/404-error-1.png'
            let author = desejoLerLocal[i]['Authors'] ? desejoLerLocal[i]['Authors'] : ['Desconhecido']
            let desc = desejoLerLocal[i]['Description'] ? desejoLerLocal[i]['Description'] : 'Descrição indisponivel'

            setDesejoLer((desejoLer: Array<BooklistProps>) => [...desejoLer, { id: id ,CurrentShelf:'desejoLer', NameBook: name, Thumbnail: thumb, Authors: author, Description: desc }])

        }

        for (let i in acabadoLocal) {
            
            let id = acabadoLocal[i]['id']

            let name = acabadoLocal[i]['NameBook'] ? acabadoLocal[i]['NameBook'] : 'Conteúdo inexistente.'
            let thumb = acabadoLocal[i]['Thumbnail'] ? acabadoLocal[i]['Thumbnail'] : 'https://i.ibb.co/NCh2r8g/404-error-1.png'
            let author = acabadoLocal[i]['Authors'] ? acabadoLocal[i]['Authors'] : ['Desconhecido']
            let desc = acabadoLocal[i]['Description'] ? acabadoLocal[i]['Description'] : 'Descrição indisponivel'

            setAcabado((acabado: Array<BooklistProps>) => [...acabado, { id: id ,CurrentShelf:'acabado', NameBook: name, Thumbnail: thumb, Authors: author, Description: desc }])
        }

    }, [])

    
    localStorage.setItem('lendoAtual', JSON.stringify(lendoAtual))
    localStorage.setItem('desejoLer', JSON.stringify(desejoLer))
    localStorage.setItem('acabado', JSON.stringify(acabado))
    

    return (
        <bookContext.Provider value={{
            lendoAtual, setLendoAtual, desejoLer, setDesejoLer, acabado, setAcabado,
        }}>
            {children}
        </bookContext.Provider>
    );

}
