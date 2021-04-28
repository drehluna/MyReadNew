import { useContext } from 'react';
import { bookContext } from '../BookList/bookcontext';
import style from '../Menu/menu.module.css'
import { SearchPageContext } from '../SearchPage/SearchPageContext';
import { MenuContext } from './MenuContext';

export function Menu () {

    const {ChangeActive} = useContext(SearchPageContext)
    const {setCurrentList, setheader} = useContext(MenuContext)
    const {acabado,desejoLer,lendoAtual} = useContext(bookContext)

    return (
        <div className={style.menubar}>
        <span onClick={() => {setCurrentList(lendoAtual); setheader('Lendo atualmente')}}></span>
        <span onClick={() => {setCurrentList(desejoLer) ; setheader('Desejo ler') }}></span>
        <span onClick={() => {setCurrentList(acabado); setheader('Já terminei')}}></span>
        <span onClick={ChangeActive}>+</span>
      </div>

    );
}