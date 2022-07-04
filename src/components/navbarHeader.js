import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { MesinList } from '../helpers/MesinList'
import { PabrikList } from '../helpers/PabrikList'
import HapusPabrikModal from './HapusPabrikModal'
import HapusMesinModal from './HapusMesinModal'
import TambahAnggota from './modal/tambahAnggota'
import TambahMemberModal from './modal/tambahMember'
import UbahMemberModal from './modal/ubahMemberModal'
import HapusMemberModal from './modal/hapusMemberModal'


function NavbarHeader(props) {

    const { step1, step2, homeId, mesinId } = props
    const data = PabrikList?.find((row) => row.name.split(' ').join('-').toLocaleLowerCase() === homeId)
    const dataMesin = MesinList?.find((row) => row.name.split(' ').join('-').toLocaleLowerCase() === mesinId)

    const [show, setShow] = useState(false);
    const [showAnggota, setShowAnggota] = useState(false);
    const [addMember, setAddMember] = useState(false);
    const [ubahMember, setUbahMember] = useState(false);
    const [hapusMember, setHapusMember] = useState(false);
    const [hapusMesin, setHapusMesin] = useState(false);


    function handleClose() {
        setShow(false)
    }

    function handleCloseAnggota() {
        setShowAnggota(false)
    }

    function handleCloseAddMember() {
        setAddMember(false)
    }

    function handleCloseUbahMember() {
        setUbahMember(false)
    }

    function handleCloseHapusMember() {
        setHapusMember(false)
    }

    function handleCloseHapusMesin() {
        setHapusMesin(false)
    }

    const router = useHistory()

    return (
        <>
            <div className='px-5 my-2 border container rounded-3 shadow d-flex align-items-center py-2'>
                <Link to={'/pabrik'}>
                    <img
                        src={'/assets/home.svg'}
                        width={80}
                        height={80}
                    />
                    {/* </a> */}
                </Link>
                {
                    step1 === 1 && homeId &&
                    <>
                        <div className='me-2' >
                            <img
                                src={'/assets/chevron-left.png'}
                                width={30}
                                height={80}
                            />
                        </div>
                        <div className={`d-flex ${!mesinId && "w-100"}`}>
                            <Link className='text-decoration-none text-black' to={`/pabrik/${homeId}`}>
                                <img
                                    className='rounded-circle'
                                    src={data.image}
                                    width={70}
                                    height={70}
                                />
                            </Link>
                            <div className='px-2'>
                                <p className='mb-0 text-nowrap'>{data.name}</p>
                                <p className='mb-0 text-nowrap'>{data.caption}</p>
                                <a className='text-decoration-none' href='#' target={"_blank"}>buka peta</a>
                            </div>
                            {!mesinId && <div className='d-flex justify-content-end align-content-center w-100'>
                                <div className='text-end'>
                                    <button
                                        className='btn btn-sm btn-primary rounded-pill'
                                        onClick={() => setShowAnggota(true)}
                                    >
                                        <img src='/assets/Profile.png' width={'20px'} /> Anggota
                                    </button>
                                    <button
                                        className='btn btn-sm btn-primary rounded-pill ms-2'
                                        onClick={() => router.push('/ubah-pabrik')}
                                    >
                                        <img src='/assets/Edit.png' width={'20px'} /> Ubah
                                    </button>
                                    <div>
                                        <button
                                            className='btn btn-sm btn-danger rounded-pill my-1'
                                            onClick={() => setShow(true)}
                                        >
                                            <img src='/assets/Trash.png' width={'20px'} /> Hapus
                                        </button>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    </>

                }
                {step2 === 2 && homeId && mesinId &&
                    <>
                        <div className='me-2'>
                            <img
                                src={'/assets/chevron-left.png'}
                                width={30}
                                height={80}
                            />
                        </div>
                        <div className='d-flex'>
                            <img
                                className='rounded-circle'
                                src={dataMesin.image}
                                width={70}
                                height={70}
                            />
                            <div className='px-2'>
                                <p className='mb-0 text-nowrap'>{dataMesin.name}</p>
                                <p className='mb-0'>{dataMesin.brand}</p>
                                <p className='mb-0'> {dataMesin.type}</p>
                            </div>
                        </div>

                        <div className='w-100 text-end'>
                            <button
                                className='btn btn-sm btn-primary rounded-pill ms-2'
                                onClick={() => router.push('/ubah-mesin')}
                            >
                                <img src='/assets/Edit.png' width={'20px'} /> Ubah
                            </button><br />
                            <button
                                className='btn btn-sm btn-danger rounded-pill my-1'
                                onClick={() => setHapusMesin(true)}
                            >
                                <img src='/assets/Trash.png' width={'20px'} /> Hapus
                            </button>
                        </div>
                    </>
                }
            </div>

            <HapusPabrikModal
                show={show}
                handleClose={handleClose}
            />

            <TambahAnggota
                show={showAnggota}
                handleClose={handleCloseAnggota}
                setAddMember={setAddMember}
                setUbahMember={setUbahMember}
                setHapusMember={setHapusMember}
            />

            <TambahMemberModal
                show={addMember}
                handleClose={handleCloseAddMember}
            />

            <UbahMemberModal
                show={ubahMember}
                handleClose={handleCloseUbahMember}
            />

            <HapusMemberModal
                show={hapusMember}
                handleClose={handleCloseHapusMember}
            />

            <HapusMesinModal
                show={hapusMesin}
                handleClose={handleCloseHapusMesin}
            />

        </>
    )
}

export default NavbarHeader