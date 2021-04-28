import style from '../Header/header.module.css'


interface props {
    name: any
}

export function Header(props:props) {
    return (

        <>
            
            <h2 className={style.h2}>{props.name}</h2>
        </>

    );
}