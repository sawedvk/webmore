import React from 'react'
import { useHistory } from 'react-router-dom'

function FormMesin() {

    const router = useHistory()

    return (
        <div className='formMesin w-75 mx-auto'>
            {/* <form>   */}
                <div className='row mt-3'>
                    <p className='col-4'>Nama Mesin</p>
                    <div className='col-8'>
                        <input className='form-control rounded-pill' name='namaMesin' type='text' />
                    </div>
                </div>

                <div className='row mt-3'>
                    <p className='col-4'>Tipe Mesin</p>
                    <div className='col-8'>
                        <input className='form-control rounded-pill' name='tipeMesin' type='text' />
                    </div>
                </div>

                <div className='row mt-3'>
                    <p className='col-4'>Merek Mesin</p>
                    <div className='col-8'>
                        <input className='form-control rounded-pill' name='merekMesin' type='text' />
                    </div>
                </div>

                <div className='row mt-3'>
                    <p className='col-4'>Foto Mesin</p>
                    <div className='col-8'>
                        <input className='form-control rounded-pill' name='fotoMesin' type='file' />
                    </div>
                </div>

                <div className='text-center mt-5'>
                    <button className='btn btn-primary w-25 me-3'>SELESAI</button>
                    <button onClick={()=>router.goBack()} className='btn btn-danger w-25 ms-3'>BATAL</button>
                </div>
            {/* </form>  */}

        </div>
    )
}

export default FormMesin