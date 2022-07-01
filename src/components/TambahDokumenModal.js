import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default function TambahDokumenModal(props) {

    const { show, handleClose } = props

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title className='text-center w-100 fw-bold'>Tambah Dokumen</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-start fw-bold'>
                    <form className='flex-column'>
                        <label >Pilih Dokumen</label>
                        <input name='tambahDoc' type='file' className='mt-2 mb-3 rounded-pill form-control' />
                        <input name='gantiNama' type='checkbox'/> <label>Ganti nama dokumen?</label>
                        <br/>
                        <input className='mt-2 rounded-pill form-control' name='namaDoc' type='text' placeholder='Nama Dokumen'/>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-outline-primary' onClick={handleClose}>
                        Tambah
                    </button>
                    <button className='btn btn-outline-danger' onClick={handleClose}>
                        Batal
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}