import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { enCodeLink } from '../utilities';

function ItemPabrik(props) {

  const { image, name, caption } = props

  return (
    <div className='col-4 mx-auto text-center mt-3'>
      <Link className='text-black text-decoration-none' to={`/home/${enCodeLink(name)}`}>
        <div className='border my-border-radius shadow'>
          <img
            src={image}
            className={'w-100'}
          />
          <p className='fw-bold mb-0'>{name}</p>
          <p>{caption}</p>
        </div>
      </Link>
    </div>

  )
}

export default ItemPabrik 