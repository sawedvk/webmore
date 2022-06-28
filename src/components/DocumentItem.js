import React from 'react';

import '../styles/DocumentItem.css';

function DocumentItem({name}) {
  return (
    <div className='documentItem'>
        <div className='leftSide'>
            <img src='/assets/document.jpeg'/>
        </div>
        <div className='rightSide'>
            <h2>{name}.pdf</h2>
            <img src='/assets/Trash.png'/>
        </div>
    </div>
  )
}

export default DocumentItem