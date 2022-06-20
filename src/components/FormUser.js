import React from 'react'

function FormUser() {
  return (
    <div className='formUser'>
        <form>
          <img></img>
          <input name='namaPengguna' type='text'/>
          <input name='emailPengguna' type='email'/>
          <input name='phonePengguna' type='number'/>
        </form>
    </div>
  )
}

export default FormUser