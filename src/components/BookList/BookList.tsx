
import { fireEvent } from '@testing-library/dom';
import { useContext, useState } from 'react';
import style from '../BookList/booklist.module.css'
import { FirstTime } from '../FirstTime/FirstTime';
import { Header } from '../Header/Header'
import { MenuContext } from '../Menu/MenuContext';
import { bookContext } from './bookcontext';

interface BooklistProps {

  id: string;
  CurrentShelf: string;
  NameBook: string;
  Thumbnail: string;
  Authors: Array<String>;
  Description: string;

}

interface BookProps {

  bookList: Array<BooklistProps>
  header: any;

}



export function Booklist(props: BookProps) {

  const { setCurrentList, Currentlist, setheader } = useContext(MenuContext)
  const { desejoLer, acabado, lendoAtual, setAcabado, setDesejoLer, setLendoAtual } = useContext(bookContext)

  const [FirstTimeEvent, SetFirstTimeEvent] = useState(false)

  
  function remove(index: number, currentshelf: string) {

    if (currentshelf === 'lendoAtual') {

      const newarray = [...lendoAtual]
      newarray.splice(index, 1)
      setLendoAtual(newarray)
      setCurrentList(newarray)


    }
    if (currentshelf === 'desejoLer') {
      const newarray = [...desejoLer]
      newarray.splice(index, 1)
      setDesejoLer(newarray)
      setCurrentList(newarray)


    }
    if (currentshelf === 'acabado') {
      const newarray = [...acabado]
      newarray.splice(index, 1)
      setAcabado(newarray)
      setCurrentList(newarray)


    }
  }

  function changeShelf(toshelf: string, name: string, thumb: string, author: any, desc: string, currentshelf: string, id: string, index: number) {
    if (toshelf === 'lendoAtual') {
      setLendoAtual((lendoAtual: Array<BooklistProps>) => [...lendoAtual, { id: id, CurrentShelf: 'lendoAtual', NameBook: name, Thumbnail: thumb, Authors: author, Description: desc }])
      remove(index, currentshelf)




    }
    if (toshelf === 'desejoLer') {
      setDesejoLer((desejoLer: Array<BooklistProps>) => [...desejoLer, { id: id, CurrentShelf: 'desejoLer', NameBook: name, Thumbnail: thumb, Authors: author, Description: desc }])
      remove(index, currentshelf)


    }
    if (toshelf === 'acabado') {
      setAcabado((acabado: Array<BooklistProps>) => [...acabado, { id: id, CurrentShelf: 'acabado', NameBook: name, Thumbnail: thumb, Authors: author, Description: desc }])
      remove(index, currentshelf)


    }

    if (toshelf === 'none') {
      remove(index, currentshelf)


    }
  }


  const Books = props.bookList.map((itens, index) => <div key={itens.id}>

    <ol>
      <li>
        <div className={style.content}>
          <h1>{itens.NameBook}</h1>
          <img src={itens.Thumbnail} alt={itens.NameBook} />
          <div className={style.menu}>
            <h1>{itens.Authors}</h1>
            <div>
              <select onChange={e => changeShelf(e.target.value, itens.NameBook, itens.Thumbnail, itens.Authors, itens.Description, itens.CurrentShelf, itens.id, index)}>
                <option disabled selected value="value 1">Mover para</option>
                <option value="lendoAtual">Lendo atualmente</option>
                <option value="desejoLer">Desejo ler</option>
                <option value="acabado">Ja li</option>
                <option value="none">Excluir</option>
              </select>
            </div>
          </div>

          <span className={style.desc}>
            <p>{itens.Description}</p>
          </span>
        </div>
      </li>
    </ol>


  </div>)


  return (

    <>

      <Header name={props.header} />

      
        <section className={style.books}>
          {FirstTimeEvent ? <FirstTime/> : Books}
        </section>

    

    </>
  );
}