import React from 'react'

function LaporanComp() {
    return (
        <div>
            <div className='row align-items-center'>
                <div className='col-3'>
                    <label>Pilih Variabel</label>
                    <select className='form-control'>
                        <option>Status</option>
                        <option>Kecepatan Mesin</option>
                        <option>Aliran Masuk</option>
                        <option>Total</option>
                        <option>Lama Bekerja</option>
                    </select>
                </div>

                <div className='col-3'>
                    <label>Tanggal Mulai</label>
                    <input className='form-control' type='date' />
                </div>

                <div className='col-3'>
                    <label>Tanggal Berakhir</label>
                    <input className='form-control' type='date' />
                </div>

                <div className='col-3'>
                    <button className='btn btn-primary w-100'>Tampilkan</button>
                </div>
            </div>

            <div className='mt-5'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Waktu Pencatatan</th>
                            <th scope="col">Hasil</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>dummy date</td>
                            <td>dummy data</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>dummy date</td>
                            <td>dummy data</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>dummy date</td>
                            <td>dummy data</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default LaporanComp