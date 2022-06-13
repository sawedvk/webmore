import React from 'react';
import "../styles/ItemMesin.css";

function ItemMesin({image,name,type,brand}) {
  return (
    <div className='itemMesin'>
        <div className='leftSide' style={{ backgroundImage: `url(${image})` }}>
        </div>
        <div className='rightSide'>
            <h3>{name}</h3>
            <p>Tipe : {type}</p>
            <p>Merek : {brand}</p> 
        </div>
    </div>
  )
}

export default ItemMesin