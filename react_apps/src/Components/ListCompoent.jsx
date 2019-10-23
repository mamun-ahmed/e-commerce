import React from 'react';
import {Link} from 'react-router-dom'

function ListComponent({listClass,linkClass,title,url,Icon,isActive}) {
    return(
        <>
        <li key={Math.abs(Math.random())} className={listClass+" "+isActive}>
            <Link className={linkClass} to={url}> 
                <i className={Icon}></i>{title}
            </Link>
        </li>
        </>
    )
}

export default ListComponent;