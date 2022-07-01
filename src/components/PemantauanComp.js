import React from 'react'
import { MonitoringList } from '../helpers/MonitoringList';
import MonitorItem from './MonitorItem';


function PemantauanComp() {
    return (

        <div className='monitor d-flex container'>
            {MonitoringList.map((menuItem, key) => {
                return (
                    <MonitorItem
                        key={key}
                        data={menuItem.data}
                        satuan={menuItem.satuan}
                        ket={menuItem.ket} />
                );
            })}
        </div>

    )
}

export default PemantauanComp