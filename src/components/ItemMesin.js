import React from 'react';
import "../styles/ItemMesin.css";

function ItemMesin({ image, name, type, brand }) {
  return (
    <div className='col-4'>
      <div className='shadow my-border-radius d-flex align-items-center'>
        <img
          src={image}

        />
        <div className='d-flex flex-column px-4'>
          <h3 className='text-nowrap mb-0'>{name}</h3>
          <p className='mb-0'>Tipe : {type}</p>
          <p className='mb-0'>Merek : {brand}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemMesin