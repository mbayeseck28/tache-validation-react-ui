import React from 'react'
import ListeProd from './ListeProd'
import Graphique2 from './graphique2/graphique2'
import Cards from '../../components/cards-et-filtre/Cards'
import Filtre from '../../components/cards-et-filtre/Filtre'

const Dashboard = () => {
  
  return (
    <div className='m-3 text-xl font-bold underline'>
    <div className='container m-3 text-xl font-bold '>
      <div className='flex justify-between'>
      <div>Dashboard</div>
      <Filtre/>
      </div>
      

      <Cards/>
      
    </div>
    <div>
    <Graphique2/>
    <ListeProd />
    </div>
    </div>
  )

}
export default Dashboard

