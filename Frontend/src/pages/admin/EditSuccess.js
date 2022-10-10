import React from 'react'
import { SuccessDiv, SuccessContainer } from '../reserve/ReserveStyles'
import Tic from '../../assets/Vector.png'
import { useNavigate } from 'react-router-dom'

const EditSuccess = () => {
  const navigate = useNavigate()
  return (
    <SuccessContainer>
      <SuccessDiv>
        <img src={Tic} alt='tic'/>
        <h4>¡Muchas gracias!</h4>
        <p>El producto se ha editado con exito</p>
        <button onClick={(()=>{navigate('/')})}>Ok</button>
      </SuccessDiv>
    </SuccessContainer>
  )
}

export default EditSuccess;