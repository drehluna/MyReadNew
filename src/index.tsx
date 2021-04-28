import ReactDOM from 'react-dom';
import App from './App';
import BookProvider from './components/BookList/bookcontext';
import MenuProvider from './components/Menu/MenuContext';
import SearchPageProvider from './components/SearchPage/SearchPageContext';


ReactDOM.render(
  <BookProvider>
    <SearchPageProvider>
    <MenuProvider>
    <App />
    </MenuProvider>
    </SearchPageProvider>
  </BookProvider>,
  document.getElementById('root')
);

