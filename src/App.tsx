import { useContext } from 'react';
import { Booklist } from './components/BookList/BookList';
import { Menu } from './components/Menu/Menu';
import { MenuContext } from './components/Menu/MenuContext';
import { SearchPage } from './components/SearchPage/SearchPage';
import { SearchPageContext } from './components/SearchPage/SearchPageContext';
import style from './styles/global.module.css'



const App = () => {


  const { Currentlist,header } = useContext(MenuContext)
  const { SearchActive } = useContext(SearchPageContext)
  return (

    <div className={style.container}>

      {SearchActive ? (
        <>
        <header className={style.header}>
                <span>Livros</span>
            </header>
        <SearchPage/>

        </>

      ) : (

        <>
          <header className={style.header}>
                <span>Livros</span>
            </header>
          <Menu />
          <Booklist header={header}bookList={Currentlist} />

        </>
      )}

    </div>


  );
}

export default App;
