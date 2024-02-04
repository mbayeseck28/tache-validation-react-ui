import React from 'react'
import { useParams } from 'react-router-dom'
import useProduits from '../../utils/hooks/useProduits';

const DetailsProduits = () => {
    const {id} = useParams();
    const { table2 } = useProduits();
    const myProd = table2.filter((_, index) => index !== id)
  return (
    <div>
    {myProd.filter((_, index) => index !== id)}
      
    </div>
  )
}

export default DetailsProduits
