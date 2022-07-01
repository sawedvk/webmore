import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default function UbahNamaProfilModal(props) {

    const { show, handleClose } = props

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title className='text-center w-100 fw-bold'>Ubah Nama</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-start fw-bold'>
                    <form className='flex-column'>
                        <label >Nama</label>
                        <input className='mt-2 rounded-pill form-control' name='namaProfil' type='text' placeholder='Nama'/>
                        <label >Nomor Telepon</label>
                        <input className='mt-2 rounded-pill form-control' name='telpProfil' type='tel' placeholder='Nomor Telepon'/>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-outline-primary' onClick={handleClose}>
                        Ubah
                    </button>
                    <button className='btn btn-outline-danger' onClick={handleClose}>
                        Batal
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}