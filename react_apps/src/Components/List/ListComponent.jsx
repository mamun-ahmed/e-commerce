import React from 'react';

export function ListComponent({listClass,linkclass,url,title}){
    return(<>
        <li  className={listClass}>
            <Link className={linkclass} to={url}>{title}</Link>
        </li>
    </>)
}

