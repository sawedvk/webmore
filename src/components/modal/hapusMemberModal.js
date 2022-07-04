import Modal from 'react-bootstrap/Modal';
import React from 'react'

function HapusMemberModal(props) {

    const { show, handleClose } = props

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title className='text-center w-100 fw-bold'>Hapus Anggota</Modal.Title>
            </Modal.Header>
            <Modal.Body className='text-center fw-bold'>
                Apakah anda yakin ingin menghapus anggota ini?
            </Modal.Body>
            <Modal.Footer className='w-100 d-flex justify-content-center'>
                <button className='btn btn-outline-danger w-25 rounded-pill' onClick={handleClose}>
                    Hapus
                </button>
                <button className='btn btn-outline-primary w-25 rounded-pill' onClick={handleClose}>
                    Batal
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default HapusMemberModal