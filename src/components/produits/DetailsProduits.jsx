import React from 'react'
import { useParams } from 'react-router-dom'

import useSidebare from '../../utils/hooks/useSidebare'
import HeaderTable from '../headerTable/HeaderTable';

const DetailsProduits = () => {
    const {id} = useParams();
    const {open} = useSidebare()
  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"  } m-4  my-3 `}>
      <HeaderTable title="Détail du produit" />
      <h2>Id: </h2> {id}
    </div>
  )
}

export default DetailsProduits
