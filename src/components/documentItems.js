import React from 'react'

function DocumentItems() {
    return (
        <div className='col-3'>
            {/* <Link className='text-black text-decoration-none' to={`/mesin/${enCodeLink(name)}`}> */}
                <div className='shadow my-border-radius d-flex align-items-center'>
                    <img
                        src='/assets/document.png'
                    />
                    <div className='d-flex flex-column px-4'>
                        {/* <h3 className='text-nowrap mb-0 fw-bold fs-4'>{name}</h3> */}
                    </div>
                    <img
                        src='/assets/Trash.png'
                    />
                </div>
            {/* </Link> */}
        </div>
    )
}

export default DocumentItems