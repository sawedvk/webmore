import React, { useState } from 'react'
import { DocumentList } from '../helpers/DocumentList';
import DocumentItems from './documentItems';
import TambahDokumenModal from './TambahDokumenModal';

function DocumentComp() {

    const [show, setShow] = useState(false);

    function handleClose() {
        setShow(false)
    }

    return (
        <div>
            <div className='container d-flex mt-0 w-100 justify-content-end py-2'>
                <button className='mx-3 px-5 btn text-nowrap btn-primary rounded-pill' onClick={() => setShow(true)}>+ Tambah</button>
                <input name='search' type='search' className='form-control rounded-pill w-25' placeholder='Telusuri' />
                <TambahDokumenModal
                    show={show}
                    handleClose={handleClose}
                />
            </div>
            <div className='doc d-flex'>
                {
                    DocumentList.map((row) => (
                        <DocumentItems
                            name={row.name}
                        />
                    ))

                }
            </div>
        </div>
    )
}

export default DocumentComp