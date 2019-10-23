import React from 'react';
function TableHead({thclass,title}) {
    return(
        <th className={thclass}>{title}</th>
    )
}

export default TableHead;