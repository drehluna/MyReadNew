
import { useContext, useEffect, useState } from 'react';
import { Booklist } from '../BookList/BookList'
import style from './SearchPage.module.css'
import { SearchPageContext } from './SearchPageContext';

import {search} from '../../API'
import { bookContext } from '../BookList/bookcontext';
import { MenuContext } from '../Menu/MenuContext';

interface BooklistProps {

    id: string;
    CurrentShelf: string;
    NameBook: string;
    Thumbnail: string;
    Authors: Array<String>;
    Description: string;
  
}

export function SearchPage() {

    const {ChangeActive, SearchBooks, SetSearch} = useContext(SearchPageContext)
    const {lendoAtual, setLendoAtual} = useContext(bookContext)
    const {setCurrentList,setheader} = useContext(MenuContext)
    const [search2, setSearch2] = useState('')
    const [headername, setheadername] = useState('')

    let trimString = function (string:string, length:number) {
        return string.length > length ? 
               string.substring(0, length) + '...' :
               string;
      };


   

    async function getBooks(value: string) {
        const books = await search(value)
        setheadername('Resultados')
        for (let i in books) {
            let id = books[i]['id']
            let name = books[i]['title'] ? books[i]['title'] : 'Conteúdo inexistente.'
            let thumb = books[i]['imageLinks'] ? books[i]['imageLinks']['thumbnail'] : 'https://i.ibb.co/NCh2r8g/404-error-1.png'
            let author = books[i]['authors'] ? books[i]['authors'] : ['Desconhecido']
            let desc = books[i]['description'] ? books[i]['description'] : 'Descrição indisponivel'
            
           
            
            SetSearch((SearchBooks: Array<BooklistProps>) => [...SearchBooks, { id: id ,CurrentShelf:'', NameBook: trimString(name,20), Thumbnail: thumb, Authors: author, Description: trimString(desc, 90) }])
           
            
          }

    }

    useEffect(() => {
        if(search2 != '') {
        SetSearch([{id: '',CurrentShelf:'', NameBook: '', Thumbnail: '', Authors: [], Description: ''}].splice(1,1))
        
        const timeOutId = setTimeout(() => getBooks(search2), 500);
        return () => clearTimeout(timeOutId);
        }
    },
    [search2])

    return (
        <div>
            <div className={style.input}>
                <input type="text" placeholder="Busque pelo gênero desejado" onChange={e => setSearch2(e.target.value)} />
            </div>
            <div className={style.menubar}>
                <span onClick={() => {
                    ChangeActive()
                    setCurrentList(lendoAtual)
                }}></span>
            </div>
            <section>
                <Booklist header={headername} bookList={SearchBooks} />
            </section>
        </div>
    );

}