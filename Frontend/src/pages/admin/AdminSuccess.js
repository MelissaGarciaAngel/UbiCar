import React from 'react'
import { SuccessDiv, SuccessContainer } from '../reserve/ReserveStyles'
import Tic from '../../assets/Vector.png'
import { useNavigate } from 'react-router-dom'

const AdminSuccess = () => {
  const navigate = useNavigate()
  return (
    <SuccessContainer>
      <SuccessDiv>
        <img src={Tic} alt='tic'/>
        <h4>¡Muchas gracias!</h4>
        <p>Su producto se ha creado con exito</p>
        <button onClick={(()=>{navigate('/')})}>Ok</button>
      </SuccessDiv>
    </SuccessContainer>
  )
}

export default AdminSuccess