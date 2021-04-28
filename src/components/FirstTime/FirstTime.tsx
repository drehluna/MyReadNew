import style from './FirstTime.module.css'

export function FirstTime() {
    return (
        <div className={style.content}>


           
            <h1>Bem vindo</h1>
            <div>
            <p>
                Você ainda não adicionou nenhum livro a sua estante. Use o botao de <strong>+ </strong>
                ao lado para fazer isso.
            </p>
            </div>
         </div>
    );
}