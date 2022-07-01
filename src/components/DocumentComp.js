import React from 'react'
import { DocumentList } from '../helpers/DocumentList';
import DocumentItems from './documentItems';

function DocumentComp() {
  return (
    <div>
        <div className='doc'>
         {
            DocumentList.map((row)=>(
                <DocumentItems />
            ))

         }
        </div>
    </div>
  )
}

export default DocumentComp