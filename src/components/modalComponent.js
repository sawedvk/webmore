import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default function ModalComponent(props) {

    const { show,handleClose } = props

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title className='text-center w-100'>Pengaturan Alarm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='flex-column'>
                        <input name='aktifAlarm' type='checkbox'/> <label>Aktifkan Alarm</label>
                        <br/>
                        <label className='mt-3'>Batas Minimum</label>
                        <input className='mt-2 rounded-pill form-control' name='batasMin' type='text'/>
                        <label className='mt-2'>Batas Maksimum</label>
                        <input className='mt-2 rounded-pill form-control' name='batasMax' type='text'/>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-outline-primary' onClick={handleClose}>
                        Simpan
                    </button>
                    <button className='btn btn-outline-danger' onClick={handleClose}>
                        Batal
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}