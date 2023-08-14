import { StyledCard } from './style'
import { FaTrash } from 'react-icons/fa'
import { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'

interface iCard {
  id: number
  img: string
  name: string
  count: number
}

const CardCart = ({ id, img, name, count }: iCard) => {
  const { addSameProduct, subSameProduct } = useContext(CartContext)

  const { currentCart, setCurrentCart } = useContext(CartContext)

  const handleUpdateList = (id: number) => {
    const updateList = currentCart.filter((product) => product.id !== id)
    setCurrentCart(updateList)
  }

  return (
    <StyledCard>
      <div className="infoContainer">
        <img src={img} alt={name} />
        <div>
          <h3>{name}</h3>
          <div className="box">
            <button onClick={() => subSameProduct(id)}>-</button>
            <p>{count}</p>
            <button onClick={() => addSameProduct(id)}>+</button>
          </div>
        </div>
      </div>
      <button onClick={() => handleUpdateList(id)} className="trash">
        <FaTrash />
      </button>
    </StyledCard>
  )
}

export default CardCart
