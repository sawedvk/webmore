import { Button } from 'bootstrap';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Person.css';
import TambahMemberModal from './modal/tambahMember';
import TambahDokumenModal from './TambahDokumenModal';

function Person(props) {

    const { setUbahMember } = props
    const { setHapusMember } = props

    const dataAnggota = [
        {
            image: '/assets/person.png',
            name: "Admin A",
            email: "adminA@gmail.com",
            position: "Member"
        },
        {
            image: '/assets/person.png',
            name: "Admin B",
            email: "adminB@gmail.com",
            position: "Member"
        },
        {
            image: '/assets/person.png',
            name: "Admin C",
            email: "adminC@gmail.com",
            position: "Member"
        }
    ]

    const [show, setShow] = useState(false);

    function handleClose() {
        setShow(false)
    }

    function editMember() {
        setUbahMember(true)
    }

    function deleteMember() {
        setHapusMember(true)
    }


    return (
        <>
            <div>
                {dataAnggota.map((row, i) => (
                    <div key={i} className='person d-flex w-100 justify-content-between'>
                        <div className='leftSide ms-5'>
                            <img src={row.image} />
                        </div>
                        <div className='center me-5'>
                            <h3 className='mb-0'>{row.name}</h3>
                            <p className='mb-0'>{row.email}</p>
                        </div>
                        <div className='rightSide'>
                            <div>
                                <button
                                    onClick={() => editMember()}
                                    className='btn'>
                                    <img src={'/assets/Edit.png'} />
                                </button>
                                <button
                                    onClick={() => deleteMember()}
                                    className='btn'>
                                    <img src={'/assets/Trash.png'} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )

}

export default Person