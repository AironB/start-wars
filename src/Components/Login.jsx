import React from 'react'


export const Login = () => {
  return (
    <>
    <div className='contenedor'>
     <div>
     <label>Login</label>
     <input type='text' placeholder='Usuario'></input>
     </div>
     <div>
      <label>Contraseña</label>
      <input type='password' placeholder='contraseña'></input>
     </div>
     <button>Iniciar Sesion</button>
     <br />
     <label><a href='#'>Crear cuenta</a></label>
     </div>
     
    </>
  )
}
