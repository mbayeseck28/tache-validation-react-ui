import React from 'react'
import ProduitContextProvider from '../../utils/contexte/ProduitsContext'
import ListeProdDashboard from '../../components/listeProd/ListeProdDashboard'

const ListeProd = () => {
  return (
    <ProduitContextProvider>
        <ListeProdDashboard />
    </ProduitContextProvider>
  )
}

export default ListeProd;