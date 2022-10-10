import React from 'react'
import { GalleryContainer, ButtonContainer, ChoiceDiv } from './ProductStyles'
import { useNavigate } from 'react-router-dom'

const ProductChoice = ({handleClose}) => {
  const navigate = useNavigate();
  return (
    <GalleryContainer>
      <ChoiceDiv>
        <h2>Debes estar logeado para generar una reserva</h2>
        <ButtonContainer>
          <button onClick={()=>navigate('/login')} >Iniciar sesion</button>
          <button onClick={handleClose} >Volver a producto</button>
        </ButtonContainer>
      </ChoiceDiv>
    </GalleryContainer>
  )
}

export default ProductChoice