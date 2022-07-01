import React, { useState } from 'react'
import HapusDokumenModal from './HapusDokumenModal';

function DocumentItems({ name }) {

    const [show, setShow] = useState(false);

    function handleClose() {
        setShow(false)
    }

    return (
        <div className='col-3 mt-2 mx-2 '>
            {/* <Link className='text-black text-decoration-none' to={`/mesin/${enCodeLink(name)}`}> */}
            <div className='shadow my-border-radius d-flex align-items-center'>
                <img
                    className='mx-1'
                    src='/assets/document.png'
                    width={35}
                    height={35}
                />
                <div className='d-flex my-3 mx-2 w-100'>
                    <h3 className='text-nowrap mb-0 fw-bold fs-6'>{name}</h3>
                </div>
                <img
                    className='justify-content-end me-3'
                    src='/assets/Trash.png'
                    width={35}
                    height={35}
                    onClick={() => setShow(true)}
                />
                <HapusDokumenModal
                    show={show}
                    handleClose={handleClose}
                />
            </div>
            {/* </Link> */}
        </div>
    )
}

export default DocumentItems