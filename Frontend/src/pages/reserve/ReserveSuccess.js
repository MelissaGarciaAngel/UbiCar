import React from 'react'
import { SuccessDiv, SuccessContainer } from './ReserveStyles'
import Tic from '../../assets/Vector.png'
import { useNavigate } from 'react-router-dom'

const ReserveSuccess = () => {
  const navigate = useNavigate()
  return (
    <SuccessContainer>
      <SuccessDiv>
        <img src={Tic} alt='tic'/>
        <h4>¡Muchas gracias!</h4>
        <p>Su reserva se ha relizado con exito</p>
        <button onClick={(()=>{navigate('/')})}>Ok</button>
      </SuccessDiv>
    </SuccessContainer>
  )
}

export default ReserveSuccess